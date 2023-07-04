# Controller

A controller's responsibility is to control its devices per its own control logic and to communicate properly with its Agent.

The mode of communication between a Controller and an Agent is left unspecified to allow flexibility in communication (serial, ethernet, wireless, etc), but the content of these messages follows the [Message Schema](./message_schema.md).

A controller needs to be able to properly receive the following messages:
- `GetConfig`
- `SetDeviceConfig`
- `SetDeviceState`

A controller needs to be able to properly send the following messages:
- `DeviceConfig`
- `DeviceState`

The mode of message passing can be done one of 3 ways:
- Internally (for a unit that is both a Controller and Agent)
- A [Controller Interface](../controller_interfaces/index.md) defined in this specification
- A custom interface not defined in this specification. In this situation the Controller and Agent still both need to agree on the interface and be compatible.