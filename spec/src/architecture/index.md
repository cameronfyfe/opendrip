# Architecture

The opendrip system architecture is primarily an MQTT-backed message passing architecture with 3 types of actors:
- Controller
- Agent
- Client

Controllers are units that control physical devices in the irrigation system (valves, flow meters, moisture sensors, etc). Controllers do not directly send or receive MQTT messages.

Agents are units that communicate with Controllers and handle sending/receiving MQTT messages relevant to that Controller. An Agent can communicate with multiple Controllers. A single device can also act as both an Agent and Controller to send/receive its own messages.

Clients are interfaces for viewing and interacting with the system. Clients view the live state of the system via MQTT subscriptions and interact with the system by publishing MQTT messages.

An example architecture diagram is shown below.

```mermaid
graph LR
    valve1[Valve]
    valve2[Valve]
    valve3[Valve]
    valve4[Valve]
    valve5[Valve]
    valve6[Valve]
    
    ctlr1[Controller 1]
    ctlr2[Controller 2]
    ctlr3[Controller 3]
    
    agentA[Agent A]
    agentB[Agent B]

    mqtt((MQTT Broker))

    client[Client]
    
    subgraph Controller 1
    valve1 -.- ctlr1
    valve2 -.- ctlr1
    end

    subgraph Controller 2
    valve3 -.- ctlr2
    valve4 -.- ctlr2
    end
    
    subgraph Controller 3
    valve5 -.- ctlr3
    valve6 -.- ctlr3
    end

    ctlr1 --- agentA
    ctlr2 --- agentA
    ctlr3 --- agentB

    agentA --- mqtt
    agentB --- mqtt

    mqtt --- client
```
