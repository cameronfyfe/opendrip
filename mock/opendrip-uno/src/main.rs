use anyhow::Result;
use protobuf::Message;
use rumqttc::{Client, Event, Incoming, MqttOptions, Publish, QoS};
use std::thread;
use std::time::Duration;

use opendrip_uno::opendrip_msg::opendrip_msg::{
    DeviceConfig, DeviceInfo, DeviceState, DeviceMode, DeviceType, DeviceUnits
};

trait Device {
    fn name(&self) -> String;
    fn min_msg_interval_ms(&self) -> u32;
    fn device_type(&self) -> DeviceType;
    fn device_units(&self) -> DeviceUnits;
    fn device_mode(&self) -> DeviceMode;
    fn msg_interval_ms(&self) -> u32;
    fn state_value(&self) -> String;
}

struct Valve {
    pub name: String,
    pub is_open: bool,
    pub device_mode: DeviceMode,
    pub msg_interval_ms: u32,
}

impl Default for Valve {
    fn default() -> Self {
        Self {
            name: "".to_owned(),
            is_open: false,
            device_mode: DeviceMode::AUTO,
            msg_interval_ms: 5000,
        }
    }
}

impl Device for Valve {
    fn name(&self) -> String {
        self.name.clone()
    }
    fn min_msg_interval_ms(&self) -> u32 {
        500
    }
    fn device_type(&self) -> DeviceType {
        DeviceType::VALVE
    }
    fn device_units(&self) -> DeviceUnits {
        DeviceUnits::OPEN_CLOSE
    }
    fn device_mode(&self) -> DeviceMode {
        self.device_mode
    }
    fn msg_interval_ms(&self) -> u32 {
        self.msg_interval_ms
    }
    fn state_value(&self) -> String {
        (if self.is_open { "open" } else { "closed" }).to_owned()
    }
}

fn main() -> Result<()> {
    let mut options = MqttOptions::new("rumqtt-sync", "127.0.0.1", 1883);
    options.set_keep_alive(Duration::from_secs(5));

    let (mut client, mut connection) = Client::new(options, 10);

    let valves = [
        Valve { name: "Valve 1".to_owned(), ..Valve::default() },
        Valve { name: "Valve 2".to_owned(), ..Valve::default() },
        Valve { name: "Valve 3".to_owned(), ..Valve::default() },
        Valve { name: "Valve 4".to_owned(), ..Valve::default() },
    ];

    thread::spawn(move || {
        for i in 0..10 {
            let msg = DeviceState {
                value: i.to_string(),
                ..DeviceState::default()
            };
            let msg = msg.write_to_bytes().unwrap();

            client
                .publish(
                    "agents/agent-1/controllers/c1/devices/device-1/state",
                    QoS::AtLeastOnce,
                    false,
                    msg,
                )
                .unwrap();
            thread::sleep(Duration::from_millis(1000));
        }
    });

    for event in connection.iter() {
        let event = event?;
        match event {
            Event::Incoming(event) => match event {
                Incoming::Connect(_) => {}
                Incoming::ConnAck(_) => {}
                Incoming::Publish(event) => {
                    let Publish {
                        dup,
                        qos,
                        retain,
                        topic,
                        pkid,
                        payload,
                    } = event;
                    let (_, _, _, _) = (dup, qos, retain, pkid);
                    let topic = {
                        let t = topic.split('/').collect::<Vec<_>>();
                        let f = |i| t.get(i).copied().unwrap_or("");

                        [f(0), f(1), f(2), f(3), f(4), f(5), f(6), f(7), f(8), f(9)]
                    };

                    match topic {
                        ["agents", agent, "controllers", controller, "devices", device, "info", "", ..] =>
                        {
                            let DeviceInfo {
                                name,
                                properties,
                                min_msg_interval_ms,
                                device_type,
                                device_units,
                                ..
                            } = DeviceInfo::parse_from_bytes(&payload)?;
                            println!("{agent}/{controller}/{device}");
                            println!("  DeviceInfo");
                            println!("    Name: {name}");
                            let _ = properties;
                            println!("    Properties: TODO");
                            println!("    Min Msg Interval: {min_msg_interval_ms} ms");
                            let _ = device_type;
                            println!("    Device Type: TODO");
                            let _ = device_units;
                            println!("    Device Units: TODO");
                        }
                        ["agents", agent, "controllers", controller, "devices", device, "config", "", ..] =>
                        {
                            let DeviceConfig {
                                device_mode,
                                msg_interval_ms,
                                ..
                            } = DeviceConfig::parse_from_bytes(&payload)?;
                            println!("{agent}/{controller}/{device}");
                            println!("  DeviceConfig");
                            let _ = device_mode;
                            println!("    Device Mode: TODO");
                            println!("    Msg Interval: {msg_interval_ms} ms");
                        }
                        ["agents", agent, "controllers", controller, "devices", device, "state", "", ..] =>
                        {
                            let DeviceState { value, .. } =
                                DeviceState::parse_from_bytes(&payload)?;
                            println!("{agent}/{controller}/{device}");
                            println!("  DeviceState");
                            println!("    Value: {value}");
                        }
                        topic => {
                            let topic = topic.join("/");
                            println!("Unrecognized topic");
                            println!("  Topic: {topic}");
                            println!("  Msg: {:?}", payload);
                        }
                    }
                }
                Incoming::PubAck(_) => {}
                Incoming::PubRec(_) => {}
                Incoming::PubRel(_) => {}
                Incoming::PubComp(_) => {}
                Incoming::Subscribe(_) => {}
                Incoming::SubAck(_) => {}
                Incoming::Unsubscribe(_) => {}
                Incoming::UnsubAck(_) => {}
                Incoming::PingReq => {}
                Incoming::PingResp => {}
                Incoming::Disconnect => {}
            },
            Event::Outgoing(_) => {}
        }
    }

    Ok(())
}
