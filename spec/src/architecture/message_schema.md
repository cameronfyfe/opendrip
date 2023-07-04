# Message Schema

MQTT is used as the primary method for message passing in an opendrip system. There are 4 top-level categories of messages. Info Messages, Config Messages, State Messages, and Control Messages. Info, Config, and State Messages are published by Agents and read by Clients. Control Messages are published by Clients and read by Agents.

Info Messages show static controller info and are meant to be published on an as needed basis, only when requested by a client.

Config Messages show controller configurations and are meant to be published on an as needed basis, only when requested by a client.

State Messages show live controller states and are published continuously.

Control Messages are messages that allow a Client to control Controllers.

TODO: revisit this after finishing protobuf message definitions.

## Info Messages

TODO

## Config Messages

### Agent Config

`devices/{agent-id}/config`

|Parameter|Type|Description|
|-|-|-|
|Model|`String`|Name of the agent model|
|Controllers|`Vec<String>`|List of controller IDs this agent communicates with. These controller IDs can then be used to query the config of each controller individually.|

### Controller Config

`devices/{agent-id}/{controller-id}/config`

|Parameter|Type|Description|
|-|-|-|
|Model|`String`|Name of the controller model|
|Devices|`Vec<String>`|List of device IDs this controller is operating. These device IDs can then be used to query the config of each device individually.|

### Device Config

`devices/{agent-id}/{controller-id}/{device-id}/config`

|Parameter|Type|Description|
|-|-|-|
|Type|`String`|Type of the device|
|Units|`String`|Units for the readings/state of this device|
|Minimum State Interval|`u32`|Minimum value allowed for "State Interval"|
|State Interval|`u32`|Number of seconds between state messages|

## State Messages

### Agent State

Message showing current agent state.

`devices/{agent-id}/state`

|Parameter|Type|Description|
|-|-|-|
|Mode|`Mode`|Mode can be `auto`, `manual`, or `remote`|
|Uptime|`u32`|Number of seconds sinceopendripate`

|Parameter|Type|Description|
|-|-|-|
|Uptime|`u32`|Number of seconds since controller was powered on|

### Device State

Message showing current device state. A device is a physical device attached to a controller.

`devices/{agent-id}/{controller-id}/{device-id}/state`

|Parameter|Type|Description|
|-|-|-|
|Value|`Value`|Device reading/state|

## Control Messages

All control messages contain 2 items. The authorization and the payload. The authorization comes from the client publishing the message and the payload is specific to the type of control message being published.

|Parameter|Type|Description|
|-|-|-|
|Auth|`ControlMsgAuth`|Authorization for the control message|
|Payload|`ControlMsgPayload`|Payload of the control message|

Further control message schemas shown below will be only for the Payload of the wrapped message.

### Get Config

Request the config of an agent, controller, or device.

**agent:** `devices/{agent-id}/config/get`

**controller:** `devices/{agent-id}/{controller-id}/config/get`

**device:** `devices/{agent-id}/{controller-id}/{device-id}/config/get`

This Control Message is sent with an empty payload.

### Set Device Config

Set the config of a device.

`devices/{agent-id}/{controller-id}/{device-id}/config/set`

|Payload Parameter|Type|Description|
|-|-|-|
|State Interval|`u32`|Number of seconds between state messages|

### Set Device State

Set the state of a device. Some devices have a state that can be set (valve, etc) and some have a read-only state (flow meter, etc).

This only takes affect when device mode is set to `remote`. If device is in `auto` or `manual` modes this control message is ignored.

`devices/{agent-id}/{controller-id}/{device-id}/state/set`

|Payload Parameter|Type|Description|
|-|-|-|
|Value|`Value`|Value to set the state to|
