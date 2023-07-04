import * as $protobuf from "protobufjs";
import Long = require("long");
/** DeviceType enum. */
export enum DeviceType {
    VALVE = 0,
    FLOW_METER = 1
}

/** DeviceUnits enum. */
export enum DeviceUnits {
    OPEN_CLOSE = 0,
    GALLONS_PER_MINUTE = 1
}

/** DeviceMode enum. */
export enum DeviceMode {
    AUTO = 0,
    MANUAL = 1,
    REMOTE = 2
}

/** Represents a DeviceInfo. */
export class DeviceInfo implements IDeviceInfo {

    /**
     * Constructs a new DeviceInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceInfo);

    /** DeviceInfo name. */
    public name: string;

    /** DeviceInfo properties. */
    public properties: { [k: string]: string };

    /** DeviceInfo standardType. */
    public standardType?: (DeviceType|null);

    /** DeviceInfo customType. */
    public customType?: (string|null);

    /** DeviceInfo standardUnit. */
    public standardUnit?: (DeviceUnits|null);

    /** DeviceInfo customUnit. */
    public customUnit?: (string|null);

    /** DeviceInfo minMsgIntervalMs. */
    public minMsgIntervalMs: number;

    /** DeviceInfo deviceType. */
    public deviceType?: ("standardType"|"customType");

    /** DeviceInfo deviceUnits. */
    public deviceUnits?: ("standardUnit"|"customUnit");

    /**
     * Creates a new DeviceInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceInfo instance
     */
    public static create(properties?: IDeviceInfo): DeviceInfo;

    /**
     * Encodes the specified DeviceInfo message. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @param message DeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @param message DeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceInfo;

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceInfo;

    /**
     * Verifies a DeviceInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceInfo
     */
    public static fromObject(object: { [k: string]: any }): DeviceInfo;

    /**
     * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
     * @param message DeviceInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceConfig. */
export class DeviceConfig implements IDeviceConfig {

    /**
     * Constructs a new DeviceConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceConfig);

    /** DeviceConfig deviceMode. */
    public deviceMode: DeviceMode;

    /** DeviceConfig msgIntervalMs. */
    public msgIntervalMs: number;

    /**
     * Creates a new DeviceConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceConfig instance
     */
    public static create(properties?: IDeviceConfig): DeviceConfig;

    /**
     * Encodes the specified DeviceConfig message. Does not implicitly {@link DeviceConfig.verify|verify} messages.
     * @param message DeviceConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceConfig message, length delimited. Does not implicitly {@link DeviceConfig.verify|verify} messages.
     * @param message DeviceConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceConfig;

    /**
     * Decodes a DeviceConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceConfig;

    /**
     * Verifies a DeviceConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceConfig
     */
    public static fromObject(object: { [k: string]: any }): DeviceConfig;

    /**
     * Creates a plain object from a DeviceConfig message. Also converts values to other types if specified.
     * @param message DeviceConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceState. */
export class DeviceState implements IDeviceState {

    /**
     * Constructs a new DeviceState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceState);

    /** DeviceState value. */
    public value: string;

    /**
     * Creates a new DeviceState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceState instance
     */
    public static create(properties?: IDeviceState): DeviceState;

    /**
     * Encodes the specified DeviceState message. Does not implicitly {@link DeviceState.verify|verify} messages.
     * @param message DeviceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceState message, length delimited. Does not implicitly {@link DeviceState.verify|verify} messages.
     * @param message DeviceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceState;

    /**
     * Decodes a DeviceState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceState;

    /**
     * Verifies a DeviceState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceState
     */
    public static fromObject(object: { [k: string]: any }): DeviceState;

    /**
     * Creates a plain object from a DeviceState message. Also converts values to other types if specified.
     * @param message DeviceState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ControllerInfo. */
export class ControllerInfo implements IControllerInfo {

    /**
     * Constructs a new ControllerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IControllerInfo);

    /** ControllerInfo name. */
    public name: string;

    /** ControllerInfo properties. */
    public properties: { [k: string]: string };

    /** ControllerInfo devices. */
    public devices: string[];

    /**
     * Creates a new ControllerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ControllerInfo instance
     */
    public static create(properties?: IControllerInfo): ControllerInfo;

    /**
     * Encodes the specified ControllerInfo message. Does not implicitly {@link ControllerInfo.verify|verify} messages.
     * @param message ControllerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IControllerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ControllerInfo message, length delimited. Does not implicitly {@link ControllerInfo.verify|verify} messages.
     * @param message ControllerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IControllerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ControllerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ControllerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ControllerInfo;

    /**
     * Decodes a ControllerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ControllerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ControllerInfo;

    /**
     * Verifies a ControllerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ControllerInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ControllerInfo
     */
    public static fromObject(object: { [k: string]: any }): ControllerInfo;

    /**
     * Creates a plain object from a ControllerInfo message. Also converts values to other types if specified.
     * @param message ControllerInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ControllerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ControllerInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ControllerInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ControllerConfig. */
export class ControllerConfig implements IControllerConfig {

    /**
     * Constructs a new ControllerConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IControllerConfig);

    /**
     * Creates a new ControllerConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ControllerConfig instance
     */
    public static create(properties?: IControllerConfig): ControllerConfig;

    /**
     * Encodes the specified ControllerConfig message. Does not implicitly {@link ControllerConfig.verify|verify} messages.
     * @param message ControllerConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IControllerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ControllerConfig message, length delimited. Does not implicitly {@link ControllerConfig.verify|verify} messages.
     * @param message ControllerConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IControllerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ControllerConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ControllerConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ControllerConfig;

    /**
     * Decodes a ControllerConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ControllerConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ControllerConfig;

    /**
     * Verifies a ControllerConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ControllerConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ControllerConfig
     */
    public static fromObject(object: { [k: string]: any }): ControllerConfig;

    /**
     * Creates a plain object from a ControllerConfig message. Also converts values to other types if specified.
     * @param message ControllerConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ControllerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ControllerConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ControllerConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ControllerState. */
export class ControllerState implements IControllerState {

    /**
     * Constructs a new ControllerState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IControllerState);

    /** ControllerState uptimeS. */
    public uptimeS: number;

    /**
     * Creates a new ControllerState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ControllerState instance
     */
    public static create(properties?: IControllerState): ControllerState;

    /**
     * Encodes the specified ControllerState message. Does not implicitly {@link ControllerState.verify|verify} messages.
     * @param message ControllerState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IControllerState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ControllerState message, length delimited. Does not implicitly {@link ControllerState.verify|verify} messages.
     * @param message ControllerState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IControllerState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ControllerState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ControllerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ControllerState;

    /**
     * Decodes a ControllerState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ControllerState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ControllerState;

    /**
     * Verifies a ControllerState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ControllerState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ControllerState
     */
    public static fromObject(object: { [k: string]: any }): ControllerState;

    /**
     * Creates a plain object from a ControllerState message. Also converts values to other types if specified.
     * @param message ControllerState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ControllerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ControllerState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ControllerState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AgentInfo. */
export class AgentInfo implements IAgentInfo {

    /**
     * Constructs a new AgentInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAgentInfo);

    /** AgentInfo name. */
    public name: string;

    /** AgentInfo properties. */
    public properties: { [k: string]: string };

    /** AgentInfo controllers. */
    public controllers: string[];

    /**
     * Creates a new AgentInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AgentInfo instance
     */
    public static create(properties?: IAgentInfo): AgentInfo;

    /**
     * Encodes the specified AgentInfo message. Does not implicitly {@link AgentInfo.verify|verify} messages.
     * @param message AgentInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAgentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AgentInfo message, length delimited. Does not implicitly {@link AgentInfo.verify|verify} messages.
     * @param message AgentInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAgentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AgentInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AgentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentInfo;

    /**
     * Decodes an AgentInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AgentInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentInfo;

    /**
     * Verifies an AgentInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AgentInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AgentInfo
     */
    public static fromObject(object: { [k: string]: any }): AgentInfo;

    /**
     * Creates a plain object from an AgentInfo message. Also converts values to other types if specified.
     * @param message AgentInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AgentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AgentInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AgentInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AgentConfig. */
export class AgentConfig implements IAgentConfig {

    /**
     * Constructs a new AgentConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAgentConfig);

    /**
     * Creates a new AgentConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AgentConfig instance
     */
    public static create(properties?: IAgentConfig): AgentConfig;

    /**
     * Encodes the specified AgentConfig message. Does not implicitly {@link AgentConfig.verify|verify} messages.
     * @param message AgentConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAgentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AgentConfig message, length delimited. Does not implicitly {@link AgentConfig.verify|verify} messages.
     * @param message AgentConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAgentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AgentConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AgentConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentConfig;

    /**
     * Decodes an AgentConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AgentConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentConfig;

    /**
     * Verifies an AgentConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AgentConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AgentConfig
     */
    public static fromObject(object: { [k: string]: any }): AgentConfig;

    /**
     * Creates a plain object from an AgentConfig message. Also converts values to other types if specified.
     * @param message AgentConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AgentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AgentConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AgentConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AgentState. */
export class AgentState implements IAgentState {

    /**
     * Constructs a new AgentState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAgentState);

    /** AgentState uptimeS. */
    public uptimeS: number;

    /**
     * Creates a new AgentState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AgentState instance
     */
    public static create(properties?: IAgentState): AgentState;

    /**
     * Encodes the specified AgentState message. Does not implicitly {@link AgentState.verify|verify} messages.
     * @param message AgentState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAgentState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AgentState message, length delimited. Does not implicitly {@link AgentState.verify|verify} messages.
     * @param message AgentState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAgentState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AgentState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AgentState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AgentState;

    /**
     * Decodes an AgentState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AgentState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AgentState;

    /**
     * Verifies an AgentState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AgentState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AgentState
     */
    public static fromObject(object: { [k: string]: any }): AgentState;

    /**
     * Creates a plain object from an AgentState message. Also converts values to other types if specified.
     * @param message AgentState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AgentState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AgentState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AgentState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
