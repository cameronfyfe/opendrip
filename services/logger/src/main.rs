use anyhow::Result;
use protobuf::Message;
use rumqttc::{Client, Event, Incoming, MqttOptions, Publish, QoS};
use std::time::Duration;

use opendrip_logger::opendrip_msg::opendrip_msg::{DeviceConfig, DeviceInfo, DeviceState};

fn main() -> Result<()> {
    let mut options = MqttOptions::new("rumqtt-sync", "127.0.0.1", 1883);
    options.set_keep_alive(Duration::from_secs(5));

    let (mut client, mut connection) = Client::new(options, 10);

    client.subscribe("agents/#", QoS::AtMostOnce)?;

    for event in connection.iter() {
        handle_event(event?)?;
    }

    Ok(())
}

fn handle_event(event: Event) -> Result<()> {
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

    Ok(())
}
