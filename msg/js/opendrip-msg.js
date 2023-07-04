/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    /**
     * DeviceType enum.
     * @exports DeviceType
     * @enum {number}
     * @property {number} VALVE=0 VALVE value
     * @property {number} FLOW_METER=1 FLOW_METER value
     */
    $root.DeviceType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "VALVE"] = 0;
        values[valuesById[1] = "FLOW_METER"] = 1;
        return values;
    })();
    
    /**
     * DeviceUnits enum.
     * @exports DeviceUnits
     * @enum {number}
     * @property {number} OPEN_CLOSE=0 OPEN_CLOSE value
     * @property {number} GALLONS_PER_MINUTE=1 GALLONS_PER_MINUTE value
     */
    $root.DeviceUnits = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPEN_CLOSE"] = 0;
        values[valuesById[1] = "GALLONS_PER_MINUTE"] = 1;
        return values;
    })();
    
    /**
     * DeviceMode enum.
     * @exports DeviceMode
     * @enum {number}
     * @property {number} AUTO=0 AUTO value
     * @property {number} MANUAL=1 MANUAL value
     * @property {number} REMOTE=2 REMOTE value
     */
    $root.DeviceMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AUTO"] = 0;
        values[valuesById[1] = "MANUAL"] = 1;
        values[valuesById[2] = "REMOTE"] = 2;
        return values;
    })();
    
    $root.DeviceInfo = (function() {
    
        /**
         * Properties of a DeviceInfo.
         * @exports IDeviceInfo
         * @interface IDeviceInfo
         * @property {string|null} [name] DeviceInfo name
         * @property {Object.<string,string>|null} [properties] DeviceInfo properties
         * @property {DeviceType|null} [standardType] DeviceInfo standardType
         * @property {string|null} [customType] DeviceInfo customType
         * @property {DeviceUnits|null} [standardUnit] DeviceInfo standardUnit
         * @property {string|null} [customUnit] DeviceInfo customUnit
         * @property {number|null} [minMsgIntervalMs] DeviceInfo minMsgIntervalMs
         */
    
        /**
         * Constructs a new DeviceInfo.
         * @exports DeviceInfo
         * @classdesc Represents a DeviceInfo.
         * @implements IDeviceInfo
         * @constructor
         * @param {IDeviceInfo=} [properties] Properties to set
         */
        function DeviceInfo(properties) {
            this.properties = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * DeviceInfo name.
         * @member {string} name
         * @memberof DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.name = "";
    
        /**
         * DeviceInfo properties.
         * @member {Object.<string,string>} properties
         * @memberof DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.properties = $util.emptyObject;
    
        /**
         * DeviceInfo standardType.
         * @member {DeviceType|null|undefined} standardType
         * @memberof DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.standardType = null;
    
        /**
         * DeviceInfo customType.
         * @member {string|null|undefined} customType
         * @memberof DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.customType = null;
    
        /**
         * DeviceInfo standardUnit.
         * @member {DeviceUnits|null|undefined} standardUnit
         * @memberof DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.standardUnit = null;
    
        /**
         * DeviceInfo customUnit.
         * @member {string|null|undefined} customUnit
         * @memberof DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.customUnit = null;
    
        /**
         * DeviceInfo minMsgIntervalMs.
         * @member {number} minMsgIntervalMs
         * @memberof DeviceInfo
         * @instance
         */
        DeviceInfo.prototype.minMsgIntervalMs = 0;
    
        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;
    
        /**
         * DeviceInfo deviceType.
         * @member {"standardType"|"customType"|undefined} deviceType
         * @memberof DeviceInfo
         * @instance
         */
        Object.defineProperty(DeviceInfo.prototype, "deviceType", {
            get: $util.oneOfGetter($oneOfFields = ["standardType", "customType"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * DeviceInfo deviceUnits.
         * @member {"standardUnit"|"customUnit"|undefined} deviceUnits
         * @memberof DeviceInfo
         * @instance
         */
        Object.defineProperty(DeviceInfo.prototype, "deviceUnits", {
            get: $util.oneOfGetter($oneOfFields = ["standardUnit", "customUnit"]),
            set: $util.oneOfSetter($oneOfFields)
        });
    
        /**
         * Creates a new DeviceInfo instance using the specified properties.
         * @function create
         * @memberof DeviceInfo
         * @static
         * @param {IDeviceInfo=} [properties] Properties to set
         * @returns {DeviceInfo} DeviceInfo instance
         */
        DeviceInfo.create = function create(properties) {
            return new DeviceInfo(properties);
        };
    
        /**
         * Encodes the specified DeviceInfo message. Does not implicitly {@link DeviceInfo.verify|verify} messages.
         * @function encode
         * @memberof DeviceInfo
         * @static
         * @param {IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                for (var keys = Object.keys(message.properties), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.properties[keys[i]]).ldelim();
            if (message.standardType != null && Object.hasOwnProperty.call(message, "standardType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.standardType);
            if (message.customType != null && Object.hasOwnProperty.call(message, "customType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.customType);
            if (message.standardUnit != null && Object.hasOwnProperty.call(message, "standardUnit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.standardUnit);
            if (message.customUnit != null && Object.hasOwnProperty.call(message, "customUnit"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.customUnit);
            if (message.minMsgIntervalMs != null && Object.hasOwnProperty.call(message, "minMsgIntervalMs"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.minMsgIntervalMs);
            return writer;
        };
    
        /**
         * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link DeviceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceInfo
         * @static
         * @param {IDeviceInfo} message DeviceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a DeviceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (message.properties === $util.emptyObject)
                            message.properties = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.properties[key] = value;
                        break;
                    }
                case 3: {
                        message.standardType = reader.int32();
                        break;
                    }
                case 4: {
                        message.customType = reader.string();
                        break;
                    }
                case 5: {
                        message.standardUnit = reader.int32();
                        break;
                    }
                case 6: {
                        message.customUnit = reader.string();
                        break;
                    }
                case 7: {
                        message.minMsgIntervalMs = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceInfo} DeviceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a DeviceInfo message.
         * @function verify
         * @memberof DeviceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                if (!$util.isObject(message.properties))
                    return "properties: object expected";
                var key = Object.keys(message.properties);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.properties[key[i]]))
                        return "properties: string{k:string} expected";
            }
            if (message.standardType != null && message.hasOwnProperty("standardType")) {
                properties.deviceType = 1;
                switch (message.standardType) {
                default:
                    return "standardType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.customType != null && message.hasOwnProperty("customType")) {
                if (properties.deviceType === 1)
                    return "deviceType: multiple values";
                properties.deviceType = 1;
                if (!$util.isString(message.customType))
                    return "customType: string expected";
            }
            if (message.standardUnit != null && message.hasOwnProperty("standardUnit")) {
                properties.deviceUnits = 1;
                switch (message.standardUnit) {
                default:
                    return "standardUnit: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.customUnit != null && message.hasOwnProperty("customUnit")) {
                if (properties.deviceUnits === 1)
                    return "deviceUnits: multiple values";
                properties.deviceUnits = 1;
                if (!$util.isString(message.customUnit))
                    return "customUnit: string expected";
            }
            if (message.minMsgIntervalMs != null && message.hasOwnProperty("minMsgIntervalMs"))
                if (!$util.isInteger(message.minMsgIntervalMs))
                    return "minMsgIntervalMs: integer expected";
            return null;
        };
    
        /**
         * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceInfo} DeviceInfo
         */
        DeviceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.DeviceInfo)
                return object;
            var message = new $root.DeviceInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.properties) {
                if (typeof object.properties !== "object")
                    throw TypeError(".DeviceInfo.properties: object expected");
                message.properties = {};
                for (var keys = Object.keys(object.properties), i = 0; i < keys.length; ++i)
                    message.properties[keys[i]] = String(object.properties[keys[i]]);
            }
            switch (object.standardType) {
            default:
                if (typeof object.standardType === "number") {
                    message.standardType = object.standardType;
                    break;
                }
                break;
            case "VALVE":
            case 0:
                message.standardType = 0;
                break;
            case "FLOW_METER":
            case 1:
                message.standardType = 1;
                break;
            }
            if (object.customType != null)
                message.customType = String(object.customType);
            switch (object.standardUnit) {
            default:
                if (typeof object.standardUnit === "number") {
                    message.standardUnit = object.standardUnit;
                    break;
                }
                break;
            case "OPEN_CLOSE":
            case 0:
                message.standardUnit = 0;
                break;
            case "GALLONS_PER_MINUTE":
            case 1:
                message.standardUnit = 1;
                break;
            }
            if (object.customUnit != null)
                message.customUnit = String(object.customUnit);
            if (object.minMsgIntervalMs != null)
                message.minMsgIntervalMs = object.minMsgIntervalMs >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceInfo
         * @static
         * @param {DeviceInfo} message DeviceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.properties = {};
            if (options.defaults) {
                object.name = "";
                object.minMsgIntervalMs = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            var keys2;
            if (message.properties && (keys2 = Object.keys(message.properties)).length) {
                object.properties = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.properties[keys2[j]] = message.properties[keys2[j]];
            }
            if (message.standardType != null && message.hasOwnProperty("standardType")) {
                object.standardType = options.enums === String ? $root.DeviceType[message.standardType] === undefined ? message.standardType : $root.DeviceType[message.standardType] : message.standardType;
                if (options.oneofs)
                    object.deviceType = "standardType";
            }
            if (message.customType != null && message.hasOwnProperty("customType")) {
                object.customType = message.customType;
                if (options.oneofs)
                    object.deviceType = "customType";
            }
            if (message.standardUnit != null && message.hasOwnProperty("standardUnit")) {
                object.standardUnit = options.enums === String ? $root.DeviceUnits[message.standardUnit] === undefined ? message.standardUnit : $root.DeviceUnits[message.standardUnit] : message.standardUnit;
                if (options.oneofs)
                    object.deviceUnits = "standardUnit";
            }
            if (message.customUnit != null && message.hasOwnProperty("customUnit")) {
                object.customUnit = message.customUnit;
                if (options.oneofs)
                    object.deviceUnits = "customUnit";
            }
            if (message.minMsgIntervalMs != null && message.hasOwnProperty("minMsgIntervalMs"))
                object.minMsgIntervalMs = message.minMsgIntervalMs;
            return object;
        };
    
        /**
         * Converts this DeviceInfo to JSON.
         * @function toJSON
         * @memberof DeviceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for DeviceInfo
         * @function getTypeUrl
         * @memberof DeviceInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DeviceInfo";
        };
    
        return DeviceInfo;
    })();
    
    $root.DeviceConfig = (function() {
    
        /**
         * Properties of a DeviceConfig.
         * @exports IDeviceConfig
         * @interface IDeviceConfig
         * @property {DeviceMode|null} [deviceMode] DeviceConfig deviceMode
         * @property {number|null} [msgIntervalMs] DeviceConfig msgIntervalMs
         */
    
        /**
         * Constructs a new DeviceConfig.
         * @exports DeviceConfig
         * @classdesc Represents a DeviceConfig.
         * @implements IDeviceConfig
         * @constructor
         * @param {IDeviceConfig=} [properties] Properties to set
         */
        function DeviceConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * DeviceConfig deviceMode.
         * @member {DeviceMode} deviceMode
         * @memberof DeviceConfig
         * @instance
         */
        DeviceConfig.prototype.deviceMode = 0;
    
        /**
         * DeviceConfig msgIntervalMs.
         * @member {number} msgIntervalMs
         * @memberof DeviceConfig
         * @instance
         */
        DeviceConfig.prototype.msgIntervalMs = 0;
    
        /**
         * Creates a new DeviceConfig instance using the specified properties.
         * @function create
         * @memberof DeviceConfig
         * @static
         * @param {IDeviceConfig=} [properties] Properties to set
         * @returns {DeviceConfig} DeviceConfig instance
         */
        DeviceConfig.create = function create(properties) {
            return new DeviceConfig(properties);
        };
    
        /**
         * Encodes the specified DeviceConfig message. Does not implicitly {@link DeviceConfig.verify|verify} messages.
         * @function encode
         * @memberof DeviceConfig
         * @static
         * @param {IDeviceConfig} message DeviceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceMode != null && Object.hasOwnProperty.call(message, "deviceMode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.deviceMode);
            if (message.msgIntervalMs != null && Object.hasOwnProperty.call(message, "msgIntervalMs"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.msgIntervalMs);
            return writer;
        };
    
        /**
         * Encodes the specified DeviceConfig message, length delimited. Does not implicitly {@link DeviceConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceConfig
         * @static
         * @param {IDeviceConfig} message DeviceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a DeviceConfig message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceConfig} DeviceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.deviceMode = reader.int32();
                        break;
                    }
                case 2: {
                        message.msgIntervalMs = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a DeviceConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceConfig} DeviceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a DeviceConfig message.
         * @function verify
         * @memberof DeviceConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceMode != null && message.hasOwnProperty("deviceMode"))
                switch (message.deviceMode) {
                default:
                    return "deviceMode: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.msgIntervalMs != null && message.hasOwnProperty("msgIntervalMs"))
                if (!$util.isInteger(message.msgIntervalMs))
                    return "msgIntervalMs: integer expected";
            return null;
        };
    
        /**
         * Creates a DeviceConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceConfig} DeviceConfig
         */
        DeviceConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.DeviceConfig)
                return object;
            var message = new $root.DeviceConfig();
            switch (object.deviceMode) {
            default:
                if (typeof object.deviceMode === "number") {
                    message.deviceMode = object.deviceMode;
                    break;
                }
                break;
            case "AUTO":
            case 0:
                message.deviceMode = 0;
                break;
            case "MANUAL":
            case 1:
                message.deviceMode = 1;
                break;
            case "REMOTE":
            case 2:
                message.deviceMode = 2;
                break;
            }
            if (object.msgIntervalMs != null)
                message.msgIntervalMs = object.msgIntervalMs >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a DeviceConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceConfig
         * @static
         * @param {DeviceConfig} message DeviceConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deviceMode = options.enums === String ? "AUTO" : 0;
                object.msgIntervalMs = 0;
            }
            if (message.deviceMode != null && message.hasOwnProperty("deviceMode"))
                object.deviceMode = options.enums === String ? $root.DeviceMode[message.deviceMode] === undefined ? message.deviceMode : $root.DeviceMode[message.deviceMode] : message.deviceMode;
            if (message.msgIntervalMs != null && message.hasOwnProperty("msgIntervalMs"))
                object.msgIntervalMs = message.msgIntervalMs;
            return object;
        };
    
        /**
         * Converts this DeviceConfig to JSON.
         * @function toJSON
         * @memberof DeviceConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for DeviceConfig
         * @function getTypeUrl
         * @memberof DeviceConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DeviceConfig";
        };
    
        return DeviceConfig;
    })();
    
    $root.DeviceState = (function() {
    
        /**
         * Properties of a DeviceState.
         * @exports IDeviceState
         * @interface IDeviceState
         * @property {string|null} [value] DeviceState value
         */
    
        /**
         * Constructs a new DeviceState.
         * @exports DeviceState
         * @classdesc Represents a DeviceState.
         * @implements IDeviceState
         * @constructor
         * @param {IDeviceState=} [properties] Properties to set
         */
        function DeviceState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * DeviceState value.
         * @member {string} value
         * @memberof DeviceState
         * @instance
         */
        DeviceState.prototype.value = "";
    
        /**
         * Creates a new DeviceState instance using the specified properties.
         * @function create
         * @memberof DeviceState
         * @static
         * @param {IDeviceState=} [properties] Properties to set
         * @returns {DeviceState} DeviceState instance
         */
        DeviceState.create = function create(properties) {
            return new DeviceState(properties);
        };
    
        /**
         * Encodes the specified DeviceState message. Does not implicitly {@link DeviceState.verify|verify} messages.
         * @function encode
         * @memberof DeviceState
         * @static
         * @param {IDeviceState} message DeviceState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };
    
        /**
         * Encodes the specified DeviceState message, length delimited. Does not implicitly {@link DeviceState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceState
         * @static
         * @param {IDeviceState} message DeviceState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a DeviceState message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceState} DeviceState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a DeviceState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceState} DeviceState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a DeviceState message.
         * @function verify
         * @memberof DeviceState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };
    
        /**
         * Creates a DeviceState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceState} DeviceState
         */
        DeviceState.fromObject = function fromObject(object) {
            if (object instanceof $root.DeviceState)
                return object;
            var message = new $root.DeviceState();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
    
        /**
         * Creates a plain object from a DeviceState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceState
         * @static
         * @param {DeviceState} message DeviceState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = "";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
    
        /**
         * Converts this DeviceState to JSON.
         * @function toJSON
         * @memberof DeviceState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for DeviceState
         * @function getTypeUrl
         * @memberof DeviceState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DeviceState";
        };
    
        return DeviceState;
    })();
    
    $root.ControllerInfo = (function() {
    
        /**
         * Properties of a ControllerInfo.
         * @exports IControllerInfo
         * @interface IControllerInfo
         * @property {string|null} [name] ControllerInfo name
         * @property {Object.<string,string>|null} [properties] ControllerInfo properties
         * @property {Array.<string>|null} [devices] ControllerInfo devices
         */
    
        /**
         * Constructs a new ControllerInfo.
         * @exports ControllerInfo
         * @classdesc Represents a ControllerInfo.
         * @implements IControllerInfo
         * @constructor
         * @param {IControllerInfo=} [properties] Properties to set
         */
        function ControllerInfo(properties) {
            this.properties = {};
            this.devices = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ControllerInfo name.
         * @member {string} name
         * @memberof ControllerInfo
         * @instance
         */
        ControllerInfo.prototype.name = "";
    
        /**
         * ControllerInfo properties.
         * @member {Object.<string,string>} properties
         * @memberof ControllerInfo
         * @instance
         */
        ControllerInfo.prototype.properties = $util.emptyObject;
    
        /**
         * ControllerInfo devices.
         * @member {Array.<string>} devices
         * @memberof ControllerInfo
         * @instance
         */
        ControllerInfo.prototype.devices = $util.emptyArray;
    
        /**
         * Creates a new ControllerInfo instance using the specified properties.
         * @function create
         * @memberof ControllerInfo
         * @static
         * @param {IControllerInfo=} [properties] Properties to set
         * @returns {ControllerInfo} ControllerInfo instance
         */
        ControllerInfo.create = function create(properties) {
            return new ControllerInfo(properties);
        };
    
        /**
         * Encodes the specified ControllerInfo message. Does not implicitly {@link ControllerInfo.verify|verify} messages.
         * @function encode
         * @memberof ControllerInfo
         * @static
         * @param {IControllerInfo} message ControllerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControllerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                for (var keys = Object.keys(message.properties), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.properties[keys[i]]).ldelim();
            if (message.devices != null && message.devices.length)
                for (var i = 0; i < message.devices.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.devices[i]);
            return writer;
        };
    
        /**
         * Encodes the specified ControllerInfo message, length delimited. Does not implicitly {@link ControllerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ControllerInfo
         * @static
         * @param {IControllerInfo} message ControllerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControllerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ControllerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ControllerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ControllerInfo} ControllerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControllerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ControllerInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (message.properties === $util.emptyObject)
                            message.properties = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.properties[key] = value;
                        break;
                    }
                case 3: {
                        if (!(message.devices && message.devices.length))
                            message.devices = [];
                        message.devices.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ControllerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ControllerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ControllerInfo} ControllerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControllerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ControllerInfo message.
         * @function verify
         * @memberof ControllerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ControllerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                if (!$util.isObject(message.properties))
                    return "properties: object expected";
                var key = Object.keys(message.properties);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.properties[key[i]]))
                        return "properties: string{k:string} expected";
            }
            if (message.devices != null && message.hasOwnProperty("devices")) {
                if (!Array.isArray(message.devices))
                    return "devices: array expected";
                for (var i = 0; i < message.devices.length; ++i)
                    if (!$util.isString(message.devices[i]))
                        return "devices: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates a ControllerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ControllerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ControllerInfo} ControllerInfo
         */
        ControllerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.ControllerInfo)
                return object;
            var message = new $root.ControllerInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.properties) {
                if (typeof object.properties !== "object")
                    throw TypeError(".ControllerInfo.properties: object expected");
                message.properties = {};
                for (var keys = Object.keys(object.properties), i = 0; i < keys.length; ++i)
                    message.properties[keys[i]] = String(object.properties[keys[i]]);
            }
            if (object.devices) {
                if (!Array.isArray(object.devices))
                    throw TypeError(".ControllerInfo.devices: array expected");
                message.devices = [];
                for (var i = 0; i < object.devices.length; ++i)
                    message.devices[i] = String(object.devices[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a ControllerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ControllerInfo
         * @static
         * @param {ControllerInfo} message ControllerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ControllerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.devices = [];
            if (options.objects || options.defaults)
                object.properties = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            var keys2;
            if (message.properties && (keys2 = Object.keys(message.properties)).length) {
                object.properties = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.properties[keys2[j]] = message.properties[keys2[j]];
            }
            if (message.devices && message.devices.length) {
                object.devices = [];
                for (var j = 0; j < message.devices.length; ++j)
                    object.devices[j] = message.devices[j];
            }
            return object;
        };
    
        /**
         * Converts this ControllerInfo to JSON.
         * @function toJSON
         * @memberof ControllerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ControllerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for ControllerInfo
         * @function getTypeUrl
         * @memberof ControllerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ControllerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ControllerInfo";
        };
    
        return ControllerInfo;
    })();
    
    $root.ControllerConfig = (function() {
    
        /**
         * Properties of a ControllerConfig.
         * @exports IControllerConfig
         * @interface IControllerConfig
         */
    
        /**
         * Constructs a new ControllerConfig.
         * @exports ControllerConfig
         * @classdesc Represents a ControllerConfig.
         * @implements IControllerConfig
         * @constructor
         * @param {IControllerConfig=} [properties] Properties to set
         */
        function ControllerConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new ControllerConfig instance using the specified properties.
         * @function create
         * @memberof ControllerConfig
         * @static
         * @param {IControllerConfig=} [properties] Properties to set
         * @returns {ControllerConfig} ControllerConfig instance
         */
        ControllerConfig.create = function create(properties) {
            return new ControllerConfig(properties);
        };
    
        /**
         * Encodes the specified ControllerConfig message. Does not implicitly {@link ControllerConfig.verify|verify} messages.
         * @function encode
         * @memberof ControllerConfig
         * @static
         * @param {IControllerConfig} message ControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControllerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified ControllerConfig message, length delimited. Does not implicitly {@link ControllerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ControllerConfig
         * @static
         * @param {IControllerConfig} message ControllerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControllerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ControllerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof ControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ControllerConfig} ControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControllerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ControllerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ControllerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ControllerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ControllerConfig} ControllerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControllerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ControllerConfig message.
         * @function verify
         * @memberof ControllerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ControllerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates a ControllerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ControllerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ControllerConfig} ControllerConfig
         */
        ControllerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.ControllerConfig)
                return object;
            return new $root.ControllerConfig();
        };
    
        /**
         * Creates a plain object from a ControllerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ControllerConfig
         * @static
         * @param {ControllerConfig} message ControllerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ControllerConfig.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this ControllerConfig to JSON.
         * @function toJSON
         * @memberof ControllerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ControllerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for ControllerConfig
         * @function getTypeUrl
         * @memberof ControllerConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ControllerConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ControllerConfig";
        };
    
        return ControllerConfig;
    })();
    
    $root.ControllerState = (function() {
    
        /**
         * Properties of a ControllerState.
         * @exports IControllerState
         * @interface IControllerState
         * @property {number|null} [uptimeS] ControllerState uptimeS
         */
    
        /**
         * Constructs a new ControllerState.
         * @exports ControllerState
         * @classdesc Represents a ControllerState.
         * @implements IControllerState
         * @constructor
         * @param {IControllerState=} [properties] Properties to set
         */
        function ControllerState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ControllerState uptimeS.
         * @member {number} uptimeS
         * @memberof ControllerState
         * @instance
         */
        ControllerState.prototype.uptimeS = 0;
    
        /**
         * Creates a new ControllerState instance using the specified properties.
         * @function create
         * @memberof ControllerState
         * @static
         * @param {IControllerState=} [properties] Properties to set
         * @returns {ControllerState} ControllerState instance
         */
        ControllerState.create = function create(properties) {
            return new ControllerState(properties);
        };
    
        /**
         * Encodes the specified ControllerState message. Does not implicitly {@link ControllerState.verify|verify} messages.
         * @function encode
         * @memberof ControllerState
         * @static
         * @param {IControllerState} message ControllerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControllerState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uptimeS != null && Object.hasOwnProperty.call(message, "uptimeS"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uptimeS);
            return writer;
        };
    
        /**
         * Encodes the specified ControllerState message, length delimited. Does not implicitly {@link ControllerState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ControllerState
         * @static
         * @param {IControllerState} message ControllerState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ControllerState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ControllerState message from the specified reader or buffer.
         * @function decode
         * @memberof ControllerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ControllerState} ControllerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControllerState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ControllerState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uptimeS = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ControllerState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ControllerState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ControllerState} ControllerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ControllerState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ControllerState message.
         * @function verify
         * @memberof ControllerState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ControllerState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uptimeS != null && message.hasOwnProperty("uptimeS"))
                if (!$util.isInteger(message.uptimeS))
                    return "uptimeS: integer expected";
            return null;
        };
    
        /**
         * Creates a ControllerState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ControllerState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ControllerState} ControllerState
         */
        ControllerState.fromObject = function fromObject(object) {
            if (object instanceof $root.ControllerState)
                return object;
            var message = new $root.ControllerState();
            if (object.uptimeS != null)
                message.uptimeS = object.uptimeS >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a ControllerState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ControllerState
         * @static
         * @param {ControllerState} message ControllerState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ControllerState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uptimeS = 0;
            if (message.uptimeS != null && message.hasOwnProperty("uptimeS"))
                object.uptimeS = message.uptimeS;
            return object;
        };
    
        /**
         * Converts this ControllerState to JSON.
         * @function toJSON
         * @memberof ControllerState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ControllerState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for ControllerState
         * @function getTypeUrl
         * @memberof ControllerState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ControllerState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ControllerState";
        };
    
        return ControllerState;
    })();
    
    $root.AgentInfo = (function() {
    
        /**
         * Properties of an AgentInfo.
         * @exports IAgentInfo
         * @interface IAgentInfo
         * @property {string|null} [name] AgentInfo name
         * @property {Object.<string,string>|null} [properties] AgentInfo properties
         * @property {Array.<string>|null} [controllers] AgentInfo controllers
         */
    
        /**
         * Constructs a new AgentInfo.
         * @exports AgentInfo
         * @classdesc Represents an AgentInfo.
         * @implements IAgentInfo
         * @constructor
         * @param {IAgentInfo=} [properties] Properties to set
         */
        function AgentInfo(properties) {
            this.properties = {};
            this.controllers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AgentInfo name.
         * @member {string} name
         * @memberof AgentInfo
         * @instance
         */
        AgentInfo.prototype.name = "";
    
        /**
         * AgentInfo properties.
         * @member {Object.<string,string>} properties
         * @memberof AgentInfo
         * @instance
         */
        AgentInfo.prototype.properties = $util.emptyObject;
    
        /**
         * AgentInfo controllers.
         * @member {Array.<string>} controllers
         * @memberof AgentInfo
         * @instance
         */
        AgentInfo.prototype.controllers = $util.emptyArray;
    
        /**
         * Creates a new AgentInfo instance using the specified properties.
         * @function create
         * @memberof AgentInfo
         * @static
         * @param {IAgentInfo=} [properties] Properties to set
         * @returns {AgentInfo} AgentInfo instance
         */
        AgentInfo.create = function create(properties) {
            return new AgentInfo(properties);
        };
    
        /**
         * Encodes the specified AgentInfo message. Does not implicitly {@link AgentInfo.verify|verify} messages.
         * @function encode
         * @memberof AgentInfo
         * @static
         * @param {IAgentInfo} message AgentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                for (var keys = Object.keys(message.properties), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.properties[keys[i]]).ldelim();
            if (message.controllers != null && message.controllers.length)
                for (var i = 0; i < message.controllers.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.controllers[i]);
            return writer;
        };
    
        /**
         * Encodes the specified AgentInfo message, length delimited. Does not implicitly {@link AgentInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentInfo
         * @static
         * @param {IAgentInfo} message AgentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AgentInfo message from the specified reader or buffer.
         * @function decode
         * @memberof AgentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentInfo} AgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        if (message.properties === $util.emptyObject)
                            message.properties = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.properties[key] = value;
                        break;
                    }
                case 3: {
                        if (!(message.controllers && message.controllers.length))
                            message.controllers = [];
                        message.controllers.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AgentInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentInfo} AgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AgentInfo message.
         * @function verify
         * @memberof AgentInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgentInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                if (!$util.isObject(message.properties))
                    return "properties: object expected";
                var key = Object.keys(message.properties);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.properties[key[i]]))
                        return "properties: string{k:string} expected";
            }
            if (message.controllers != null && message.hasOwnProperty("controllers")) {
                if (!Array.isArray(message.controllers))
                    return "controllers: array expected";
                for (var i = 0; i < message.controllers.length; ++i)
                    if (!$util.isString(message.controllers[i]))
                        return "controllers: string[] expected";
            }
            return null;
        };
    
        /**
         * Creates an AgentInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentInfo} AgentInfo
         */
        AgentInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentInfo)
                return object;
            var message = new $root.AgentInfo();
            if (object.name != null)
                message.name = String(object.name);
            if (object.properties) {
                if (typeof object.properties !== "object")
                    throw TypeError(".AgentInfo.properties: object expected");
                message.properties = {};
                for (var keys = Object.keys(object.properties), i = 0; i < keys.length; ++i)
                    message.properties[keys[i]] = String(object.properties[keys[i]]);
            }
            if (object.controllers) {
                if (!Array.isArray(object.controllers))
                    throw TypeError(".AgentInfo.controllers: array expected");
                message.controllers = [];
                for (var i = 0; i < object.controllers.length; ++i)
                    message.controllers[i] = String(object.controllers[i]);
            }
            return message;
        };
    
        /**
         * Creates a plain object from an AgentInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentInfo
         * @static
         * @param {AgentInfo} message AgentInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgentInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.controllers = [];
            if (options.objects || options.defaults)
                object.properties = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            var keys2;
            if (message.properties && (keys2 = Object.keys(message.properties)).length) {
                object.properties = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.properties[keys2[j]] = message.properties[keys2[j]];
            }
            if (message.controllers && message.controllers.length) {
                object.controllers = [];
                for (var j = 0; j < message.controllers.length; ++j)
                    object.controllers[j] = message.controllers[j];
            }
            return object;
        };
    
        /**
         * Converts this AgentInfo to JSON.
         * @function toJSON
         * @memberof AgentInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgentInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for AgentInfo
         * @function getTypeUrl
         * @memberof AgentInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AgentInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AgentInfo";
        };
    
        return AgentInfo;
    })();
    
    $root.AgentConfig = (function() {
    
        /**
         * Properties of an AgentConfig.
         * @exports IAgentConfig
         * @interface IAgentConfig
         */
    
        /**
         * Constructs a new AgentConfig.
         * @exports AgentConfig
         * @classdesc Represents an AgentConfig.
         * @implements IAgentConfig
         * @constructor
         * @param {IAgentConfig=} [properties] Properties to set
         */
        function AgentConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Creates a new AgentConfig instance using the specified properties.
         * @function create
         * @memberof AgentConfig
         * @static
         * @param {IAgentConfig=} [properties] Properties to set
         * @returns {AgentConfig} AgentConfig instance
         */
        AgentConfig.create = function create(properties) {
            return new AgentConfig(properties);
        };
    
        /**
         * Encodes the specified AgentConfig message. Does not implicitly {@link AgentConfig.verify|verify} messages.
         * @function encode
         * @memberof AgentConfig
         * @static
         * @param {IAgentConfig} message AgentConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };
    
        /**
         * Encodes the specified AgentConfig message, length delimited. Does not implicitly {@link AgentConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentConfig
         * @static
         * @param {IAgentConfig} message AgentConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AgentConfig message from the specified reader or buffer.
         * @function decode
         * @memberof AgentConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentConfig} AgentConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AgentConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentConfig} AgentConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AgentConfig message.
         * @function verify
         * @memberof AgentConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgentConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };
    
        /**
         * Creates an AgentConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentConfig} AgentConfig
         */
        AgentConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentConfig)
                return object;
            return new $root.AgentConfig();
        };
    
        /**
         * Creates a plain object from an AgentConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentConfig
         * @static
         * @param {AgentConfig} message AgentConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgentConfig.toObject = function toObject() {
            return {};
        };
    
        /**
         * Converts this AgentConfig to JSON.
         * @function toJSON
         * @memberof AgentConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgentConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for AgentConfig
         * @function getTypeUrl
         * @memberof AgentConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AgentConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AgentConfig";
        };
    
        return AgentConfig;
    })();
    
    $root.AgentState = (function() {
    
        /**
         * Properties of an AgentState.
         * @exports IAgentState
         * @interface IAgentState
         * @property {number|null} [uptimeS] AgentState uptimeS
         */
    
        /**
         * Constructs a new AgentState.
         * @exports AgentState
         * @classdesc Represents an AgentState.
         * @implements IAgentState
         * @constructor
         * @param {IAgentState=} [properties] Properties to set
         */
        function AgentState(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * AgentState uptimeS.
         * @member {number} uptimeS
         * @memberof AgentState
         * @instance
         */
        AgentState.prototype.uptimeS = 0;
    
        /**
         * Creates a new AgentState instance using the specified properties.
         * @function create
         * @memberof AgentState
         * @static
         * @param {IAgentState=} [properties] Properties to set
         * @returns {AgentState} AgentState instance
         */
        AgentState.create = function create(properties) {
            return new AgentState(properties);
        };
    
        /**
         * Encodes the specified AgentState message. Does not implicitly {@link AgentState.verify|verify} messages.
         * @function encode
         * @memberof AgentState
         * @static
         * @param {IAgentState} message AgentState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uptimeS != null && Object.hasOwnProperty.call(message, "uptimeS"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uptimeS);
            return writer;
        };
    
        /**
         * Encodes the specified AgentState message, length delimited. Does not implicitly {@link AgentState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AgentState
         * @static
         * @param {IAgentState} message AgentState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an AgentState message from the specified reader or buffer.
         * @function decode
         * @memberof AgentState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AgentState} AgentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AgentState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uptimeS = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an AgentState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AgentState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AgentState} AgentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an AgentState message.
         * @function verify
         * @memberof AgentState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgentState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uptimeS != null && message.hasOwnProperty("uptimeS"))
                if (!$util.isInteger(message.uptimeS))
                    return "uptimeS: integer expected";
            return null;
        };
    
        /**
         * Creates an AgentState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AgentState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AgentState} AgentState
         */
        AgentState.fromObject = function fromObject(object) {
            if (object instanceof $root.AgentState)
                return object;
            var message = new $root.AgentState();
            if (object.uptimeS != null)
                message.uptimeS = object.uptimeS >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from an AgentState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AgentState
         * @static
         * @param {AgentState} message AgentState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgentState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uptimeS = 0;
            if (message.uptimeS != null && message.hasOwnProperty("uptimeS"))
                object.uptimeS = message.uptimeS;
            return object;
        };
    
        /**
         * Converts this AgentState to JSON.
         * @function toJSON
         * @memberof AgentState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgentState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for AgentState
         * @function getTypeUrl
         * @memberof AgentState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AgentState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AgentState";
        };
    
        return AgentState;
    })();

    return $root;
});
