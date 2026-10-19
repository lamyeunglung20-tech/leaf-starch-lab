Warning: truncated output (original token count: 350864)
... 354879 bytes omitted ...

/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '180';

/**
 * Represents mouse buttons and interaction types in context of controls.
 *
 * @type {ConstantsMouse}
 * @constant
 */
const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };

/**
 * Represents touch interaction types in context of controls.
 *
 * @type {ConstantsTouch}
 * @constant
 */
const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };

/**
 * Disables face culling.
 *
 * @type {number}
 * @constant
 */
const CullFaceNone = 0;

/**
 * Culls back faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceBack = 1;

/**
 * Culls front faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceFront = 2;

/**
 * Culls both front and back faces.
 *
 * @type {number}
 * @constant
 */
const CullFaceFrontBack = 3;

/**
 * Gives unfiltered shadow maps - fastest, but lowest quality.
 *
 * @type {number}
 * @constant
 */
const BasicShadowMap = 0;

/**
 * Filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm.
 *
 * @type {number}
 * @constant
 */
const PCFShadowMap = 1;

/**
 * Filters shadow maps using the Percentage-Closer Filtering (PCF) algorithm with
 * better soft shadows especially when using low-resolution shadow maps.
 *
 * @type {number}
 * @constant
 */
const PCFSoftShadowMap = 2;

/**
 * Filters shadow maps using the Variance Shadow Map (VSM) algorithm.
 * When using VSMShadowMap all shadow receivers will also cast shadows.
 *
 * @type {number}
 * @constant
 */
const VSMShadowMap = 3;

/**
 * Only front faces are rendered.
 *
 * @type {number}
 * @constant
 */
const FrontSide = 0;

/**
 * Only back faces are rendered.
 *
 * @type {number}
 * @constant
 */
const BackSide = 1;

/**
 * Both front and back faces are rendered.
 *
 * @type {number}
 * @constant
 */
const DoubleSide = 2;

/**
 * No blending is performed which effectively disables
 * alpha transparency.
 *
 * @type {number}
 * @constant
 */
const NoBlending = 0;

/**
 * The default blending.
 *
 * @type {number}
 * @constant
 */
const NormalBlending = 1;

/**
 * Represents additive blending.
 *
 * @type {number}
 * @constant
 */
const AdditiveBlending = 2;

/**
 * Represents subtractive blending.
 *
 * @type {number}
 * @constant
 */
const SubtractiveBlending = 3;

/**
 * Represents multiply blending.
 *
 * @type {number}
 * @constant
 */
const MultiplyBlending = 4;

/**
 * Represents custom blending.
 *
 * @type {number}
 * @constant
 */
const CustomBlending = 5;

/**
 * A `source + destination` blending equation.
 *
 * @type {number}
 * @constant
 */
const AddEquation = 100;

/**
 * A `source - destination` blending equation.
 *
 * @type {number}
 * @constant
 */
const SubtractEquation = 101;

/**
 * A `destination - source` blending equation.
 *
 * @type {number}
 * @constant
 */
const ReverseSubtractEquation = 102;

/**
 * A blend equation that uses the minimum of source and destination.
 *
 * @type {number}
 * @constant
 */
const MinEquation = 103;

/**
 * A blend equation that uses the maximum of source and destination.
 *
 * @type {number}
 * @constant
 */
const MaxEquation = 104;

/**
 * Multiplies all colors by `0`.
 *
 * @type {number}
 * @constant
 */
const ZeroFactor = 200;

/**
 * Multiplies all colors by `1`.
 *
 * @type {number}
 * @constant
 */
const OneFactor = 201;

/**
 * Multiplies all colors by the source colors.
 *
 * @type {number}
 * @constant
 */
const SrcColorFactor = 202;

/**
 * Multiplies all colors by `1` minus each source color.
 *
 * @type {number}
 * @constant
 */
const OneMinusSrcColorFactor = 203;

/**
 * Multiplies all colors by the source alpha value.
 *
 * @type {number}
 * @constant
 */
const SrcAlphaFactor = 204;

/**
 * Multiplies all colors by 1 minus the source alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusSrcAlphaFactor = 205;

/**
 * Multiplies all colors by the destination alpha value.
 *
 * @type {number}
 * @constant
 */
const DstAlphaFactor = 206;

/**
 * Multiplies all colors by `1` minus the destination alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusDstAlphaFactor = 207;

/**
 * Multiplies all colors by the destination color.
 *
 * @type {number}
 * @constant
 */
const DstColorFactor = 208;

/**
 * Multiplies all colors by `1` minus each destination color.
 *
 * @type {number}
 * @constant
 */
const OneMinusDstColorFactor = 209;

/**
 * Multiplies the RGB colors by the smaller of either the source alpha
 * value or the value of `1` minus the destination alpha value. The alpha
 * value is multiplied by `1`.
 *
 * @type {number}
 * @constant
 */
const SrcAlphaSaturateFactor = 210;

/**
 * Multiplies all colors by a constant color.
 *
 * @type {number}
 * @constant
 */
const ConstantColorFactor = 211;

/**
 * Multiplies all colors by `1` minus a constant color.
 *
 * @type {number}
 * @constant
 */
const OneMinusConstantColorFactor = 212;

/**
 * Multiplies all colors by a constant alpha value.
 *
 * @type {number}
 * @constant
 */
const ConstantAlphaFactor = 213;

/**
 * Multiplies all colors by 1 minus a constant alpha value.
 *
 * @type {number}
 * @constant
 */
const OneMinusConstantAlphaFactor = 214;

/**
 * Never pass.
 *
 * @type {number}
 * @constant
 */
const NeverDepth = 0;

/**
 * Always pass.
 *
 * @type {number}
 * @constant
 */
const AlwaysDepth = 1;

/**
 * Pass if the incoming value is less than the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const LessDepth = 2;

/**
 * Pass if the incoming value is less than or equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const LessEqualDepth = 3;

/**
 * Pass if the incoming value equals the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const EqualDepth = 4;

/**
 * Pass if the incoming value is greater than or equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualDepth = 5;

/**
 * Pass if the incoming value is greater than the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const GreaterDepth = 6;

/**
 * Pass if the incoming value is not equal to the depth buffer value.
 *
 * @type {number}
 * @constant
 */
const NotEqualDepth = 7;

/**
 * Multiplies the environment map color with the surface color.
 *
 * @type {number}
 * @constant
 */
const MultiplyOperation = 0;

/**
 * Uses reflectivity to blend between the two colors.
 *
 * @type {number}
 * @constant
 */
const MixOperation = 1;

/**
 * Adds the two colors.
 *
 * @type {number}
 * @constant
 */
const AddOperation = 2;

/**
 * No tone mapping is applied.
 *
 * @type {number}
 * @constant
 */
const NoToneMapping = 0;

/**
 * Linear tone mapping.
 *
 * @type {number}
 * @constant
 */
const LinearToneMapping = 1;

/**
 * Reinhard tone mapping.
 *
 * @type {number}
 * @constant
 */
const ReinhardToneMapping = 2;

/**
 * Cineon tone mapping.
 *
 * @type {number}
 * @constant
 */
const CineonToneMapping = 3;

/**
 * ACES Filmic tone mapping.
 *
 * @type {number}
 * @constant
 */
const ACESFilmicToneMapping = 4;

/**
 * Custom tone mapping.
 *
 * Expects a custom implementation by modifying shader code of the material's fragment shader.
 *
 * @type {number}
 * @constant
 */
const CustomToneMapping = 5;

/**
 * AgX tone mapping.
 *
 * @type {number}
 * @constant
 */
const AgXToneMapping = 6;

/**
 * Neutral tone mapping.
 *
 * Implementation based on the Khronos 3D Commerce Group standard tone mapping.
 *
 * @type {number}
 * @constant
 */
const NeutralToneMapping = 7;

/**
 * The skinned mesh shares the same world space as the skeleton.
 *
 * @type {string}
 * @constant
 */
const AttachedBindMode = 'attached';

/**
 * The skinned mesh does not share the same world space as the skeleton.
 * This is useful when a skeleton is shared across multiple skinned meshes.
 *
 * @type {string}
 * @constant
 */
const DetachedBindMode = 'detached';

/**
 * Maps textures using the geometry's UV coordinates.
 *
 * @type {number}
 * @constant
 */
const UVMapping = 300;

/**
 * Reflection mapping for cube textures.
 *
 * @type {number}
 * @constant
 */
const CubeReflectionMapping = 301;

/**
 * Refraction mapping for cube textures.
 *
 * @type {number}
 * @constant
 */
const CubeRefractionMapping = 302;

/**
 * Reflection mapping for equirectangular textures.
 *
 * @type {number}
 * @constant
 */
const EquirectangularReflectionMapping = 303;

/**
 * Refraction mapping for equirectangular textures.
 *
 * @type {number}
 * @constant
 */
const EquirectangularRefractionMapping = 304;

/**
 * Reflection mapping for PMREM textures.
 *
 * @type {number}
 * @constant
 */
const CubeUVReflectionMapping = 306;

/**
 * The texture will simply repeat to infinity.
 *
 * @type {number}
 * @constant
 */
const RepeatWrapping = 1000;

/**
 * The last pixel of the texture stretches to the edge of the mesh.
 *
 * @type {number}
 * @constant
 */
const ClampToEdgeWrapping = 1001;

/**
 * The texture will repeats to infinity, mirroring on each repeat.
 *
 * @type {number}
 * @constant
 */
const MirroredRepeatWrapping = 1002;

/**
 * Returns the value of the texture element that is nearest (in Manhattan distance)
 * to the specified texture coordinates.
 *
 * @type {number}
 * @constant
 */
const NearestFilter = 1003;

/**
 * Chooses the mipmap that most closely matches the size of the pixel being textured
 * and uses the `NearestFilter` criterion (the texel nearest to the center of the pixel)
 * to produce a texture value.
 *
 * @type {number}
 * @constant
 */
const NearestMipmapNearestFilter = 1004;
const NearestMipMapNearestFilter = 1004; // legacy

/**
 * Chooses the two mipmaps that most closely match the size of the pixel being textured and
 * uses the `NearestFilter` criterion to produce a texture value from each mipmap.
 * The final texture value is a weighted average of those two values.
 *
 * @type {number}
 * @constant
 */
const NearestMipmapLinearFilter = 1005;
const NearestMipMapLinearFilter = 1005; // legacy

/**
 * Returns the weighted average of the four texture elements that are closest to the specified
 * texture coordinates, and can include items wrapped or repeated from other parts of a texture,
 * depending on the values of `wrapS` and `wrapT`, and on the exact mapping.
 *
 * @type {number}
 * @constant
 */
const LinearFilter = 1006;

/**
 * Chooses the mipmap that most closely matches the size of the pixel being textured and uses
 * the `LinearFilter` criterion (a weighted average of the four texels that are closest to the
 * center of the pixel) to produce a texture value.
 *
 * @type {number}
 * @constant
 */
const LinearMipmapNearestFilter = 1007;
const LinearMipMapNearestFilter = 1007; // legacy

/**
 * Chooses the two mipmaps that most closely match the size of the pixel being textured and uses
 * the `LinearFilter` criterion to produce a texture value from each mipmap. The final texture value
 * is a weighted average of those two values.
 *
 * @type {number}
 * @constant
 */
const LinearMipmapLinearFilter = 1008;
const LinearMipMapLinearFilter = 1008; // legacy

/**
 * An unsigned byte data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedByteType = 1009;

/**
 * A byte data type for textures.
 *
 * @type {number}
 * @constant
 */
const ByteType = 1010;

/**
 * A short data type for textures.
 *
 * @type {number}
 * @constant
 */
const ShortType = 1011;

/**
 * An unsigned short data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShortType = 1012;

/**
 * An int data type for textures.
 *
 * @type {number}
 * @constant
 */
const IntType = 1013;

/**
 * An unsigned int data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedIntType = 1014;

/**
 * A float data type for textures.
 *
 * @type {number}
 * @constant
 */
const FloatType = 1015;

/**
 * A half float data type for textures.
 *
 * @type {number}
 * @constant
 */
const HalfFloatType = 1016;

/**
 * An unsigned short 4_4_4_4 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShort4444Type = 1017;

/**
 * An unsigned short 5_5_5_1 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedShort5551Type = 1018;

/**
 * An unsigned int 24_8 data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt248Type = 1020;

/**
 * An unsigned int 5_9_9_9 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt5999Type = 35902;

/**
 * An unsigned int 10_11_11 (packed) data type for textures.
 *
 * @type {number}
 * @constant
 */
const UnsignedInt101111Type = 35899;

/**
 * Discards the red, green and blue components and reads just the alpha component.
 *
 * @type {number}
 * @constant
 */
const AlphaFormat = 1021;

/**
 * Discards the alpha component and reads the red, green and blue component.
 *
 * @type {number}
 * @constant
 */
const RGBFormat = 1022;

/**
 * Reads the red, green, blue and alpha components.
 *
 * @type {number}
 * @constant
 */
const RGBAFormat = 1023;

/**
 * Reads each element as a single depth value, converts it to floating point, and clamps to the range `[0,1]`.
 *
 * @type {number}
 * @constant
 */
const DepthFormat = 1026;

/**
 * Reads each element is a pair of depth and stencil values. The depth component of the pair is interpreted as
 * in `DepthFormat`. The stencil component is interpreted based on the depth + stencil internal format.
 *
 * @type {number}
 * @constant
 */
const DepthStencilFormat = 1027;

/**
 * Discards the green, blue and alpha components and reads just the red component.
 *
 * @type {number}
 * @constant
 */
const RedFormat = 1028;

/**
 * Discards the green, blue and alpha components and reads just the red component. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RedIntegerFormat = 1029;

/**
 * Discards the alpha, and blue components and reads the red, and green components.
 *
 * @type {number}
 * @constant
 */
const RGFormat = 1030;

/**
 * Discards the alpha, and blue components and reads the red, and green components. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGIntegerFormat = 1031;

/**
 * Discards the alpha component and reads the red, green and blue component. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGBIntegerFormat = 1032;

/**
 * Reads the red, green, blue and alpha components. The texels are read as integers instead of floating point.
 *
 * @type {number}
 * @constant
 */
const RGBAIntegerFormat = 1033;

/**
 * A DXT1-compressed image in an RGB image format.
 *
 * @type {number}
 * @constant
 */
const RGB_S3TC_DXT1_Format = 33776;

/**
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT1_Format = 33777;

/**
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT3_Format = 33778;

/**
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3
 * compression in how the alpha compression is done.
 *
 * @type {number}
 * @constant
 */
const RGBA_S3TC_DXT5_Format = 33779;

/**
 * PVRTC RGB compression in 4-bit mode. One block for each 4×4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGB_PVRTC_4BPPV1_Format = 35840;

/**
 * PVRTC RGB compression in 2-bit mode. One block for each 8×4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGB_PVRTC_2BPPV1_Format = 35841;

/**
 * PVRTC RGBA compression in 4-bit mode. One block for each 4×4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGBA_PVRTC_4BPPV1_Format = 35842;

/**
 * PVRTC RGBA compression in 2-bit mode. One block for each 8×4 pixels.
 *
 * @type {number}
 * @constant
 */
const RGBA_PVRTC_2BPPV1_Format = 35843;

/**
 * ETC1 RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_ETC1_Format = 36196;

/**
 * ETC2 RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_ETC2_Format = 37492;

/**
 * ETC2 RGBA format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ETC2_EAC_Format = 37496;

/**
 * ASTC RGBA 4x4 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_4x4_Format = 37808;

/**
 * ASTC RGBA 5x4 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_5x4_Format = 37809;

/**
 * ASTC RGBA 5x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_5x5_Format = 37810;

/**
 * ASTC RGBA 6x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_6x5_Format = 37811;

/**
 * ASTC RGBA 6x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_6x6_Format = 37812;

/**
 * ASTC RGBA 8x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x5_Format = 37813;

/**
 * ASTC RGBA 8x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x6_Format = 37814;

/**
 * ASTC RGBA 8x8 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_8x8_Format = 37815;

/**
 * ASTC RGBA 10x5 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x5_Format = 37816;

/**
 * ASTC RGBA 10x6 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x6_Format = 37817;

/**
 * ASTC RGBA 10x8 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x8_Format = 37818;

/**
 * ASTC RGBA 10x10 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_10x10_Format = 37819;

/**
 * ASTC RGBA 12x10 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_12x10_Format = 37820;

/**
 * ASTC RGBA 12x12 format.
 *
 * @type {number}
 * @constant
 */
const RGBA_ASTC_12x12_Format = 37821;

/**
 * BPTC RGBA format.
 *
 * @type {number}
 * @constant
 */
const RGBA_BPTC_Format = 36492;

/**
 * BPTC Signed RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_BPTC_SIGNED_Format = 36494;

/**
 * BPTC Unsigned RGB format.
 *
 * @type {number}
 * @constant
 */
const RGB_BPTC_UNSIGNED_Format = 36495;

/**
 * RGTC1 Red format.
 *
 * @type {number}
 * @constant
 */
const RED_RGTC1_Format = 36283;

/**
 * RGTC1 Signed Red format.
 *
 * @type {number}
 * @constant
 */
const SIGNED_RED_RGTC1_Format = 36284;

/**
 * RGTC2 Red Green format.
 *
 * @type {number}
 * @constant
 */
const RED_GREEN_RGTC2_Format = 36285;

/**
 * RGTC2 Signed Red Green format.
 *
 * @type {number}
 * @constant
 */
const SIGNED_RED_GREEN_RGTC2_Format = 36286;

/**
 * Animations are played once.
 *
 * @type {number}
 * @constant
 */
const LoopOnce = 2200;

/**
 * Animations are played with a chosen number of repetitions, each time jumping from
 * the end of the clip directly to its beginning.
 *
 * @type {number}
 * @constant
 */
const LoopRepeat = 2201;

/**
 * Animations are played with a chosen number of repetitions, alternately playing forward
 * and backward.
 *
 * @type {number}
 * @constant
 */
const LoopPingPong = 2202;

/**
 * Discrete interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateDiscrete = 2300;

/**
 * Linear interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateLinear = 2301;

/**
 * Smooth interpolation mode for keyframe tracks.
 *
 * @type {number}
 * @constant
 */
const InterpolateSmooth = 2302;

/**
 * Zero curvature ending for animations.
 *
 * @type {number}
 * @constant
 */
const ZeroCurvatureEnding = 2400;

/**
 * Zero slope ending for animations.
 *
 * @type {number}
 * @constant
 */
const ZeroSlopeEnding = 2401;

/**
 * Wrap around ending for animations.
 *
 * @type {number}
 * @constant
 */
const WrapAroundEnding = 2402;

/**
 * Default animation blend mode.
 *
 * @type {number}
 * @constant
 */
const NormalAnimationBlendMode = 2500;

/**
 * Additive animation blend mode. Can be used to layer motions on top of
 * each other to build complex performances from smaller re-usable assets.
 *
 * @type {number}
 * @constant
 */
const AdditiveAnimationBlendMode = 2501;

/**
 * For every three vertices draw a single triangle.
 *
 * @type {number}
 * @constant
 */
const TrianglesDrawMode = 0;

/**
 * For each vertex draw a triangle from the last three vertices.
 *
 * @type {number}
 * @constant
 */
const TriangleStripDrawMode = 1;

/**
 * For each vertex draw a triangle from the first vertex and the last two vertices.
 *
 * @type {number}
 * @constant
 */
const TriangleFanDrawMode = 2;

/**
 * Basic depth packing.
 *
 * @type {number}
 * @constant
 */
const BasicDepthPacking = 3200;

/**
 * A depth value is packed into 32 bit RGBA.
 *
 * @type {number}
 * @constant
 */
const RGBADepthPacking = 3201;

/**
 * A depth value is packed into 24 bit RGB.
 *
 * @type {number}
 * @constant
 */
const RGBDepthPacking = 3202;

/**
 * A depth value is packed into 16 bit RG.
 *
 * @type {number}
 * @constant
 */
const RGDepthPacking = 3203;

/**
 * Normal information is relative to the underlying surface.
 *
 * @type {number}
 * @constant
 */
const TangentSpaceNormalMap = 0;

/**
 * Normal information is relative to the object orientation.
 *
 * @type {number}
 * @constant
 */
const ObjectSpaceNormalMap = 1;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.

/**
 * No color space.
 *
 * @type {string}
 * @constant
 */
const NoColorSpace = '';

/**
 * sRGB color space.
 *
 * @type {string}
 * @constant
 */
const SRGBColorSpace = 'srgb';

/**
 * sRGB-linear color space.
 *
 * @type {string}
 * @constant
 */
const LinearSRGBColorSpace = 'srgb-linear';

/**
 * Linear transfer function.
 *
 * @type {string}
 * @constant
 */
const LinearTransfer = 'linear';

/**
 * sRGB transfer function.
 *
 * @type {string}
 * @constant
 */
const SRGBTransfer = 'srgb';

/**
 * Sets the stencil buffer value to `0`.
 *
 * @type {number}
 * @constant
 */
const ZeroStencilOp = 0;

/**
 * Keeps the current value.
 *
 * @type {number}
 * @constant
 */
const KeepStencilOp = 7680;

/**
 * Sets the stencil buffer value to the specified reference value.
 *
 * @type {number}
 * @constant
 */
const ReplaceStencilOp = 7681;

/**
 * Increments the current stencil buffer value. Clamps to the maximum representable unsigned value.
 *
 * @type {number}
 * @constant
 */
const IncrementStencilOp = 7682;

/**
 * Decrements the current stencil buffer value. Clamps to `0`.
 *
 * @type {number}
 * @constant
 */
const DecrementStencilOp = 7683;

/**
 * Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing
 * the maximum representable unsigned value.
 *
 * @type {number}
 * @constant
 */
const IncrementWrapStencilOp = 34055;

/**
 * Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable
 * unsigned value when decrementing a stencil buffer value of `0`.
 *
 * @type {number}
 * @constant
 */
const DecrementWrapStencilOp = 34056;

/**
 * Inverts the current stencil buffer value bitwise.
 *
 * @type {number}
 * @constant
 */
const InvertStencilOp = 5386;

/**
 * Will never return true.
 *
 * @type {number}
 * @constant
 */
const NeverStencilFunc = 512;

/**
 * Will return true if the stencil reference value is less than the current stencil value.
 *
 * @type {number}
 * @constant
 */
const LessStencilFunc = 513;

/**
 * Will return true if the stencil reference value is equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const EqualStencilFunc = 514;

/**
 * Will return true if the stencil reference value is less than or equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const LessEqualStencilFunc = 515;

/**
 * Will return true if the stencil reference value is greater than the current stencil value.
 *
 * @type {number}
 * @constant
 */
const GreaterStencilFunc = 516;

/**
 * Will return true if the stencil reference value is not equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const NotEqualStencilFunc = 517;

/**
 * Will return true if the stencil reference value is greater than or equal to the current stencil value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualStencilFunc = 518;

/**
 * Will always return true.
 *
 * @type {number}
 * @constant
 */
const AlwaysStencilFunc = 519;

/**
 * Never pass.
 *
 * @type {number}
 * @constant
 */
const NeverCompare = 512;

/**
 * Pass if the incoming value is less than the texture value.
 *
 * @type {number}
 * @constant
 */
const LessCompare = 513;

/**
 * Pass if the incoming value equals the texture value.
 *
 * @type {number}
 * @constant
 */
const EqualCompare = 514;

/**
 * Pass if the incoming value is less than or equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const LessEqualCompare = 515;

/**
 * Pass if the incoming value is greater than the texture value.
 *
 * @type {number}
 * @constant
 */
const GreaterCompare = 516;

/**
 * Pass if the incoming value is not equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const NotEqualCompare = 517;

/**
 * Pass if the incoming value is greater than or equal to the texture value.
 *
 * @type {number}
 * @constant
 */
const GreaterEqualCompare = 518;

/**
 * Always pass.
 *
 * @type {number}
 * @constant
 */
const AlwaysCompare = 519;

/**
 * The contents are intended to be specified once by the application, and used many
 * times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StaticDrawUsage = 35044;

/**
 * The contents are intended to be respecified repeatedly by the application, and
 * used many times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const DynamicDrawUsage = 35048;

/**
 * The contents are intended to be specified once by the application, and used at most
 * a few times as the source for drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StreamDrawUsage = 35040;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and queried
 * many times by the application.
 *
 * @type {number}
 * @constant
 */
const StaticReadUsage = 35045;

/**
 * The contents are intended to be respecified repeatedly by reading data from the 3D API, and queried
 * many times by the application.
 *
 * @type {number}
 * @constant
 */
const DynamicReadUsage = 35049;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and queried at most
 * a few times by the application
 *
 * @type {number}
 * @constant
 */
const StreamReadUsage = 35041;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and used many times as
 * the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StaticCopyUsage = 35046;

/**
 * The contents are intended to be respecified repeatedly by reading data from the 3D API, and used many times
 * as the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const DynamicCopyUsage = 35050;

/**
 * The contents are intended to be specified once by reading data from the 3D API, and used at most a few times
 * as the source for WebGL drawing and image specification commands.
 *
 * @type {number}
 * @constant
 */
const StreamCopyUsage = 35042;

/**
 * GLSL 1 shader code.
 *
 * @type {string}
 * @constant
 */
const GLSL1 = '100';

/**
 * GLSL 3 shader code.
 *
 * @type {string}
 * @constant
 */
const GLSL3 = '300 es';

/**
 * WebGL coordinate system.
 *
 * @type {number}
 * @constant
 */
const WebGLCoordinateSystem = 2000;

/**
 * WebGPU coordinate system.
 *
 * @type {number}
 * @constant
 */
const WebGPUCoordinateSystem = 2001;

/**
 * Represents the different timestamp query types.
 *
 * @type {ConstantsTimestampQuery}
 * @constant
 */
const TimestampQuery = {
	COMPUTE: 'compute',
	RENDER: 'render'
};

/**
 * Represents mouse buttons and interaction types in context of controls.
 *
 * @type {ConstantsInterpolationSamplingType}
 * @constant
 */
const InterpolationSamplingType = {
	PERSPECTIVE: 'perspective',
	LINEAR: 'linear',
	FLAT: 'flat'
};

/**
 * Represents the different interpolation sampling modes.
 *
 * @type {ConstantsInterpolationSamplingMode}
 * @constant
 */
const InterpolationSamplingMode = {
	NORMAL: 'normal',
	CENTROID: 'centroid',
	SAMPLE: 'sample',
	FIRST: 'first',
	EITHER: 'either'
};

/**
 * This type represents mouse buttons and interaction types in context of controls.
 *
 * @typedef {Object} ConstantsMouse
 * @property {number} MIDDLE - The left mouse button.
 * @property {number} LEFT - The middle mouse button.
 * @property {number} RIGHT - The right mouse button.
 * @property {number} ROTATE - A rotate interaction.
 * @property {number} DOLLY - A dolly interaction.
 * @property {number} PAN - A pan interaction.
 **/

/**
 * This type represents touch interaction types in context of controls.
 *
 * @typedef {Object} ConstantsTouch
 * @property {number} ROTATE - A rotate interaction.
 * @property {number} PAN - A pan interaction.
 * @property {number} DOLLY_PAN - The dolly-pan interaction.
 * @property {number} DOLLY_ROTATE - A dolly-rotate interaction.
 **/

/**
 * This type represents the different timestamp query types.
 *
 * @typedef {Object} ConstantsTimestampQuery
 * @property {string} COMPUTE - A `compute` timestamp query.
 * @property {string} RENDER - A `render` timestamp query.
 **/

/**
 * Represents the different interpolation sampling types.
 *
 * @typedef {Object} ConstantsInterpolationSamplingType
 * @property {string} PERSPECTIVE - Perspective-correct interpolation.
 * @property {string} LINEAR - Linear interpolation.
 * @property {string} FLAT - Flat interpolation.
 */

/**
 * Represents the different interpolation sampling modes.
 *
 * @typedef {Object} ConstantsInterpolationSamplingMode
 * @property {string} NORMAL - Normal sampling mode.
 * @property {string} CENTROID - Centroid sampling mode.
 * @property {string} SAMPLE - Sample-specific sampling mode.
 * @property {string} FIRST - Flat interpolation using the first vertex.
 * @property {string} EITHER - Flat interpolation using either vertex.
 */

/**
 * This modules allows to dispatch event objects on custom JavaScript objects.
 *
 * Main repository: [eventdispatcher.js]{@link https://github.com/mrdoob/eventdispatcher.js/}
 *
 * Code Example:
 * ```js
 * class Car extends EventDispatcher {
 * 	start() {
 *		this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
 *	}
 *};
 *
 * // Using events with the custom object
 * const car = new Car();
 * car.addEventListener( 'start', function ( event ) {
 * 	alert( event.message );
 * } );
 *
 * car.start();
 * ```
 */
class EventDispatcher {

	/**
	 * Adds the given event listener to the given event type.
	 *
	 * @param {string} type - The type of event to listen to.
	 * @param {Function} listener - The function that gets called when the event is fired.
	 */
	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === -1 ) {

			listeners[ type ].push( listener );

		}

	}

	/**
	 * Returns `true` if the given event listener has been added to the given event type.
	 *
	 * @param {string} type - The type of event.
	 * @param {Function} listener - The listener to check.
	 * @return {boolean} Whether the given event listener has been added to the given event type.
	 */
	hasEventListener( type, listener ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return false;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== -1;

	}

	/**
	 * Removes the given event listener from the given event type.
	 *
	 * @param {string} type - The type of event.
	 * @param {Function} listener - The listener to remove.
	 */
	removeEventListener( type, listener ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return;

		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== -1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	/**
	 * Dispatches an event object.
	 *
	 * @param {Object} event - The event that gets fired.
	 */
	dispatchEvent( event ) {

		const listeners = this._listeners;

		if ( listeners === undefined ) return;

		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

/**
 * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
 * (universally unique identifier).
 *
 * @return {string} The UUID.
 */
function generateUUID() {

	// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

/**
 * Clamps the given value between min and max.
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The min value.
 * @param {number} max - The max value.
 * @return {number} The clamped value.
 */
function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

/**
 * Computes the Euclidean modulo of the given parameters that
 * is `( ( n % m ) + m ) % m`.
 *
 * @param {number} n - The first parameter.
 * @param {number} m - The second parameter.
 * @return {number} The Euclidean modulo.
 */
function euclideanModulo( n, m ) {

	// https://en.wikipedia.org/wiki/Modulo_operation

	return ( ( n % m ) + m ) % m;

}

/**
 * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
 * for the given value.
 *
 * @param {number} x - The value to be mapped.
 * @param {number} a1 - Minimum value for range A.
 * @param {number} a2 - Maximum value for range A.
 * @param {number} b1 - Minimum value for range B.
 * @param {number} b2 - Maximum value for range B.
 * @return {number} The mapped value.
 */
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

/**
 * Returns the percentage in the closed interval `[0, 1]` of the given value
 * between the start and end point.
 *
 * @param {number} x - The start point
 * @param {number} y - The end point.
 * @param {number} value - A value between start and end.
 * @return {number} The interpolation factor.
 */
function inverseLerp( x, y, value ) {

	// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

/**
 * Returns a value linearly interpolated from two known points based on the given interval -
 * `t = 0` will return `x` and `t = 1` will return `y`.
 *
 * @param {number} x - The start point
 * @param {number} y - The end point.
 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
 * @return {number} The interpolated value.
 */
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

/**
 * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
 * time to maintain frame rate independent movement. For details, see
 * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
 *
 * @param {number} x - The current point.
 * @param {number} y - The target point.
 * @param {number} lambda - A higher lambda value will make the movement more sudden,
 * and a lower value will make the movement more gradual.
 * @param {number} dt - Delta time in seconds.
 * @return {number} The interpolated value.
 */
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

/**
 * Returns a value that alternates between `0` and the given `length` parameter.
 *
 * @param {number} x - The value to pingpong.
 * @param {number} [length=1] - The positive value the function will pingpong to.
 * @return {number} The alternated value.
 */
function pingpong( x, length = 1 ) {

	// https://www.desmos.com/calculator/vcsjnyz7x4

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

/**
 * Returns a value in the range `[0,1]` that represents the percentage that `x` has
 * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
 * the `min` and `max`.
 *
 * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
 *
 * @param {number} x - The value to evaluate based on its position between min and max.
 * @param {number} min - The min value. Any x value below min will be `0`.
 * @param {number} max - The max value. Any x value above max will be `1`.
 * @return {number} The alternated value.
 */
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

/**
 * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
 * that has zero 1st and 2nd order derivatives at x=0 and x=1.
 *
 * @param {number} x - The value to evaluate based on its position between min and max.
 * @param {number} min - The min value. Any x value below min will be `0`.
 * @param {number} max - The max value. Any x value above max will be `1`.
 * @return {number} The alternated value.
 */
function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

/**
 * Returns a random integer from `<low, high>` interval.
 *
 * @param {number} low - The lower value boundary.
 * @param {number} high - The upper value boundary
 * @return {number} A random integer.
 */
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

/**
 * Returns a random float from `<low, high>` interval.
 *
 * @param {number} low - The lower value boundary.
 * @param {number} high - The upper value boundary
 * @return {number} A random float.
 */
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

/**
 * Returns a random integer from `<-range/2, range/2>` interval.
 *
 * @param {number} range - Defines the value range.
 * @return {number} A random float.
 */
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

/**
 * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
 *
 * @param {number} [s] - The integer seed.
 * @return {number} A random float.
 */
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s;

	// Mulberry32 generator

	let t = _seed += 0x6D2B79F5;

	t = Math.imul( t ^ t >>> 15, t | 1 );

	t ^= t + Math.imul( t ^ t >>> 7, t | 61 );

	return ( ( t ^ t >>> 14 ) >>> 0 ) / 4294967296;

}

/**
 * Converts degrees to radians.
 *
 * @param {number} degrees - A value in degrees.
 * @return {number} The converted value in radians.
 */
function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

/**
 * Converts radians to degrees.
 *
 * @param {number} radians - A value in radians.
 * @return {number} The converted value in degrees.
 */
function radToDeg( radians ) {

	return radians * RAD2DEG;

}

/**
 * Returns `true` if the given number is a power of two.
 *
 * @param {number} value - The value to check.
 * @return {boolean} Whether the given number is a power of two or not.
 */
function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

/**
 * Returns the smallest power of two that is greater than or equal to the given number.
 *
 * @param {number} value - The value to find a POT for.
 * @return {number} The smallest power of two that is greater than or equal to the given number.
 */
function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

/**
 * Returns the largest power of two that is less than or equal to the given number.
 *
 * @param {number} value - The value to find a POT for.
 * @return {number} The largest power of two that is less than or equal to the given number.
 */
function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

/**
 * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
 * defined by the given angles and order.
 *
 * Rotations are applied to the axes in the order specified by order:
 * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
 *
 * @param {Quaternion} q - The quaternion to set.
 * @param {number} a - The rotation applied to the first axis, in radians.
 * @param {number} b - The rotation applied to the second axis, in radians.
 * @param {number} c - The rotation applied to the third axis, in radians.
 * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
 */
function setQuaternionFromProperEuler( q, a, b, c, order ) {

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}

/**
 * Denormalizes the given value according to the given typed array.
 *
 * @param {number} value - The value to denormalize.
 * @param {TypedArray} array - The typed array that defines the data type of the value.
 * @return {number} The denormalize (float) value in the range `[0,1]`.
 */
function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return value / 4294967295.0;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int32Array:

			return Math.max( value / 2147483647.0, -1 );

		case Int16Array:

			return Math.max( value / 32767.0, -1 );

		case Int8Array:

			return Math.max( value / 127.0, -1 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

/**
 * Normalizes the given value according to the given typed array.
 *
 * @param {number} value - The float value in the range `[0,1]` to normalize.
 * @param {TypedArray} array - The typed array that defines the data type of the value.
 * @return {number} The normalize value.
 */
function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return Math.round( value * 4294967295.0 );

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int32Array:

			return Math.round( value * 2147483647.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

/**
 * @class
 * @classdesc A collection of math utility functions.
 * @hideconstructor
 */
const MathUtils = {
	DEG2RAD: DEG2RAD,
	RAD2DEG: RAD2DEG,
	/**
	 * Generate a [UUID]{@link https://en.wikipedia.org/wiki/Universally_unique_identifier}
	 * (universally unique identifier).
	 *
	 * @static
	 * @method
	 * @return {string} The UUID.
	 */
	generateUUID: generateUUID,
	/**
	 * Clamps the given value between min and max.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to clamp.
	 * @param {number} min - The min value.
	 * @param {number} max - The max value.
	 * @return {number} The clamped value.
	 */
	clamp: clamp,
	/**
	 * Computes the Euclidean modulo of the given parameters that
	 * is `( ( n % m ) + m ) % m`.
	 *
	 * @static
	 * @method
	 * @param {number} n - The first parameter.
	 * @param {number} m - The second parameter.
	 * @return {number} The Euclidean modulo.
	 */
	euclideanModulo: euclideanModulo,
	/**
	 * Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
	 * for the given value.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to be mapped.
	 * @param {number} a1 - Minimum value for range A.
	 * @param {number} a2 - Maximum value for range A.
	 * @param {number} b1 - Minimum value for range B.
	 * @param {number} b2 - Maximum value for range B.
	 * @return {number} The mapped value.
	 */
	mapLinear: mapLinear,
	/**
	 * Returns the percentage in the closed interval `[0, 1]` of the given value
	 * between the start and end point.
	 *
	 * @static
	 * @method
	 * @param {number} x - The start point
	 * @param {number} y - The end point.
	 * @param {number} value - A value between start and end.
	 * @return {number} The interpolation factor.
	 */
	inverseLerp: inverseLerp,
	/**
	 * Returns a value linearly interpolated from two known points based on the given interval -
	 * `t = 0` will return `x` and `t = 1` will return `y`.
	 *
	 * @static
	 * @method
	 * @param {number} x - The start point
	 * @param {number} y - The end point.
	 * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
	 * @return {number} The interpolated value.
	 */
	lerp: lerp,
	/**
	 * Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
	 * time to maintain frame rate independent movement. For details, see
	 * [Frame rate independent damping using lerp]{@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}.
	 *
	 * @static
	 * @method
	 * @param {number} x - The current point.
	 * @param {number} y - The target point.
	 * @param {number} lambda - A higher lambda value will make the movement more sudden,
	 * and a lower value will make the movement more gradual.
	 * @param {number} dt - Delta time in seconds.
	 * @return {number} The interpolated value.
	 */
	damp: damp,
	/**
	 * Returns a value that alternates between `0` and the given `length` parameter.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to pingpong.
	 * @param {number} [length=1] - The positive value the function will pingpong to.
	 * @return {number} The alternated value.
	 */
	pingpong: pingpong,
	/**
	 * Returns a value in the range `[0,1]` that represents the percentage that `x` has
	 * moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
	 * the `min` and `max`.
	 *
	 * See [Smoothstep]{@link http://en.wikipedia.org/wiki/Smoothstep} for more details.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to evaluate based on its position between min and max.
	 * @param {number} min - The min value. Any x value below min will be `0`.
	 * @param {number} max - The max value. Any x value above max will be `1`.
	 * @return {number} The alternated value.
	 */
	smoothstep: smoothstep,
	/**
	 * A [variation on smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
	 * that has zero 1st and 2nd order derivatives at x=0 and x=1.
	 *
	 * @static
	 * @method
	 * @param {number} x - The value to evaluate based on its position between min and max.
	 * @param {number} min - The min value. Any x value below min will be `0`.
	 * @param {number} max - The max value. Any x value above max will be `1`.
	 * @return {number} The alternated value.
	 */
	smootherstep: smootherstep,
	/**
	 * Returns a random integer from `<low, high>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} low - The lower value boundary.
	 * @param {number} high - The upper value boundary
	 * @return {number} A random integer.
	 */
	randInt: randInt,
	/**
	 * Returns a random float from `<low, high>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} low - The lower value boundary.
	 * @param {number} high - The upper value boundary
	 * @return {number} A random float.
	 */
	randFloat: randFloat,
	/**
	 * Returns a random integer from `<-range/2, range/2>` interval.
	 *
	 * @static
	 * @method
	 * @param {number} range - Defines the value range.
	 * @return {number} A random float.
	 */
	randFloatSpread: randFloatSpread,
	/**
	 * Returns a deterministic pseudo-random float in the interval `[0, 1]`.
	 *
	 * @static
	 * @method
	 * @param {number} [s] - The integer seed.
	 * @return {number} A random float.
	 */
	seededRandom: seededRandom,
	/**
	 * Converts degrees to radians.
	 *
	 * @static
	 * @method
	 * @param {number} degrees - A value in degrees.
	 * @return {number} The converted value in radians.
	 */
	degToRad: degToRad,
	/**
	 * Converts radians to degrees.
	 *
	 * @static
	 * @method
	 * @param {number} radians - A value in radians.
	 * @return {number} The converted value in degrees.
	 */
	radToDeg: radToDeg,
	/**
	 * Returns `true` if the given number is a power of two.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to check.
	 * @return {boolean} Whether the given number is a power of two or not.
	 */
	isPowerOfTwo: isPowerOfTwo,
	/**
	 * Returns the smallest power of two that is greater than or equal to the given number.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to find a POT for.
	 * @return {number} The smallest power of two that is greater than or equal to the given number.
	 */
	ceilPowerOfTwo: ceilPowerOfTwo,
	/**
	 * Returns the largest power of two that is less than or equal to the given number.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to find a POT for.
	 * @return {number} The largest power of two that is less than or equal to the given number.
	 */
	floorPowerOfTwo: floorPowerOfTwo,
	/**
	 * Sets the given quaternion from the [Intrinsic Proper Euler Angles]{@link https://en.wikipedia.org/wiki/Euler_angles}
	 * defined by the given angles and order.
	 *
	 * Rotations are applied to the axes in the order specified by order:
	 * rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.
	 *
	 * @static
	 * @method
	 * @param {Quaternion} q - The quaternion to set.
	 * @param {number} a - The rotation applied to the first axis, in radians.
	 * @param {number} b - The rotation applied to the second axis, in radians.
	 * @param {number} c - The rotation applied to the third axis, in radians.
	 * @param {('XYX'|'XZX'|'YXY'|'YZY'|'ZXZ'|'ZYZ')} order - A string specifying the axes order.
	 */
	setQuaternionFromProperEuler: setQuaternionFromProperEuler,
	/**
	 * Normalizes the given value according to the given typed array.
	 *
	 * @static
	 * @method
	 * @param {number} value - The float value in the range `[0,1]` to normalize.
	 * @param {TypedArray} array - The typed array that defines the data type of the value.
	 * @return {number} The normalize value.
	 */
	normalize: normalize,
	/**
	 * Denormalizes the given value according to the given typed array.
	 *
	 * @static
	 * @method
	 * @param {number} value - The value to denormalize.
	 * @param {TypedArray} array - The typed array that defines the data type of the value.
	 * @return {number} The denormalize (float) value in the range `[0,1]`.
	 */
	denormalize: denormalize
};

/**
 * Class representing a 2D vector. A 2D vector is an ordered pair of numbers
 * (labeled x and y), which can be used to represent a number of things, such as:
 *
 * - A point in 2D space (i.e. a position on a plane).
 * - A direction and length across a plane. In three.js the length will
 * always be the Euclidean distance(straight-line distance) from `(0, 0)` to `(x, y)`
 * and the direction is also measured from `(0, 0)` towards `(x, y)`.
 * - Any arbitrary ordered pair of numbers.
 *
 * There are other things a 2D vector can be used to represent, such as
 * momentum vectors, complex numbers and so on, however these are the most
 * common uses in three.js.
 *
 * Iterating through a vector instance will yield its components `(x, y)` in
 * the corresponding order.
 * ```js
 * const a = new THREE.Vector2( 0, 1 );
 *
 * //no arguments; will be initialised to (0, 0)
 * const b = new THREE.Vector2( );
 *
 * const d = a.distanceTo( b );
 * ```
 */
class Vector2 {

	/**
	 * Constructs a new 2D vector.
	 *
	 * @param {number} [x=0] - The x value of this vector.
	 * @param {number} [y=0] - The y value of this vector.
	 */
	constructor( x = 0, y = 0 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		Vector2.prototype.isVector2 = true;

		/**
		 * The x value of this vector.
		 *
		 * @type {number}
		 */
		this.x = x;

		/**
		 * The y value of this vector.
		 *
		 * @type {number}
		 */
		this.y = y;

	}

	/**
	 * Alias for {@link Vector2#x}.
	 *
	 * @type {number}
	 */
	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	/**
	 * Alias for {@link Vector2#y}.
	 *
	 * @type {number}
	 */
	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	/**
	 * Sets the vector components.
	 *
	 * @param {number} x - The value of the x component.
	 * @param {number} y - The value of the y component.
	 * @return {Vector2} A reference to this vector.
	 */
	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	/**
	 * Sets the vector components to the same value.
	 *
	 * @param {number} scalar - The value to set for all vector components.
	 * @return {Vector2} A reference to this vector.
	 */
	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	/**
	 * Sets the vector's x component to the given value
	 *
	 * @param {number} x - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setX( x ) {

		this.x = x;

		return this;

	}

	/**
	 * Sets the vector's y component to the given value
	 *
	 * @param {number} y - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setY( y ) {

		this.y = y;

		return this;

	}

	/**
	 * Allows to set a vector component with an index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y.
	 * @param {number} value - The value to set.
	 * @return {Vector2} A reference to this vector.
	 */
	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	/**
	 * Returns the value of the vector component which matches the given index.
	 *
	 * @param {number} index - The component index. `0` equals to x, `1` equals to y.
	 * @return {number} A vector component value.
	 */
	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	/**
	 * Returns a new vector with copied values from this instance.
	 *
	 * @return {Vector2} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this.x, this.y );

	}

	/**
	 * Copies the values of the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to copy.
	 * @return {Vector2} A reference to this vector.
	 */
	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	/**
	 * Adds the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to add.
	 * @return {Vector2} A reference to this vector.
	 */
	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	/**
	 * Adds the given scalar value to all components of this instance.
	 *
	 * @param {number} s - The scalar to add.
	 * @return {Vector2} A reference to this vector.
	 */
	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	/**
	 * Adds the given vectors and stores the result in this instance.
	 *
	 * @param {Vector2} a - The first vector.
	 * @param {Vector2} b - The second vector.
	 * @return {Vector2} A reference to this vector.
	 */
	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	/**
	 * Adds the given vector scaled by the given factor to this instance.
	 *
	 * @param {Vector2} v - The vector.
	 * @param {number} s - The factor that scales `v`.
	 * @return {Vector2} A reference to this vector.
	 */
	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	/**
	 * Subtracts the given vector from this instance.
	 *
	 * @param {Vector2} v - The vector to subtract.
	 * @return {Vector2} A reference to this vector.
	 */
	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	/**
	 * Subtracts the given scalar value from all components of this instance.
	 *
	 * @param {number} s - The scalar to subtract.
	 * @return {Vector2} A reference to this vector.
	 */
	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	/**
	 * Subtracts the given vectors and stores the result in this instance.
	 *
	 * @param {Vector2} a - The first vector.
	 * @param {Vector2} b - The second vector.
	 * @return {Vector2} A reference to this vector.
	 */
	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	/**
	 * Multiplies the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to multiply.
	 * @return {Vector2} A reference to this vector.
	 */
	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	/**
	 * Multiplies the given scalar value with all components of this instance.
	 *
	 * @param {number} scalar - The scalar to multiply.
	 * @return {Vector2} A reference to this vector.
	 */
	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	/**
	 * Divides this instance by the given vector.
	 *
	 * @param {Vector2} v - The vector to divide.
	 * @return {Vector2} A reference to this vector.
	 */
	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	/**
	 * Divides this vector by the given scalar.
	 *
	 * @param {number} scalar - The scalar to divide.
	 * @return {Vector2} A reference to this vector.
	 */
	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	/**
	 * Multiplies this vector (with an implicit 1 as the 3rd component) by
	 * the given 3x3 matrix.
	 *
	 * @param {Matrix3} m - The matrix to apply.
	 * @return {Vector2} A reference to this vector.
	 */
	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	/**
	 * If this vector's x or y value is greater than the given vector's x or y
	 * value, replace that value with the corresponding min value.
	 *
	 * @param {Vector2} v - The vector.
	 * @return {Vector2} A reference to this vector.
	 */
	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	/**
	 * If this vector's x or y value is less than the given vector's x or y
	 * value, replace that value with the corresponding max value.
	 *
	 * @param {Vector2} v - The vector.
	 * @return {Vector2} A reference to this vector.
	 */
	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	/**
	 * If this vector's x or y value is greater than the max vector's x or y
	 * value, it is replaced by the corresponding value.
	 * If this vector's x or y value is less than the min vector's x or y value,
	 * it is replaced by the corresponding value.
	 *
	 * @param {Vector2} min - The minimum x and y values.
	 * @param {Vector2} max - The maximum x and y values in the desired range.
	 * @return {Vector2} A reference to this vector.
	 */
	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = clamp( this.x, min.x, max.x );
		this.y = clamp( this.y, min.y, max.y );

		return this;

	}

	/**
	 * If this vector's x or y values are greater than the max value, they are
	 * replaced by the max value.
	 * If this vector's x or y values are less than the min value, they are
	 * replaced by the min value.
	 *
	 * @param {number} minVal - The minimum value the components will be clamped to.
	 * @param {number} maxVal - The maximum value the components will be clamped to.
	 * @return {Vector2} A reference to this vector.
	 */
	clampScalar( minVal, maxVal ) {

		this.x = clamp( this.x, minVal, maxVal );
		this.y = clamp( this.y, minVal, maxVal );

		return this;

	}

	/**
	 * If this vector's length is greater than the max value, it is replaced by
	 * the max value.
	 * If this vector's length is less than the min value, it is replaced by the
	 * min value.
	 *
	 * @param {number} min - The minimum value the vector length will be clamped to.
	 * @param {number} max - The maximum value the vector length will be clamped to.
	 * @return {Vector2} A reference to this vector.
	 */
	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( clamp( length, min, max ) );

	}

	/**
	 * The components of this vector are rounded down to the nearest integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded up to the nearest integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded to the nearest integer value
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	/**
	 * The components of this vector are rounded towards zero (up if negative,
	 * down if positive) to an integer value.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );

		return this;

	}

	/**
	 * Inverts this vector - i.e. sets x = -x and y = -y.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	/**
	 * Calculates the dot product of the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to compute the dot product with.
	 * @return {number} The result of the dot product.
	 */
	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	/**
	 * Calculates the cross product of the given vector with this instance.
	 *
	 * @param {Vector2} v - The vector to compute the cross product with.
	 * @return {number} The result of the cross product.
	 */
	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	/**
	 * Computes the square of the Euclidean length (straight-line length) from
	 * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
	 * compare the length squared instead as it is slightly more efficient to calculate.
	 *
	 * @return {number} The square length of this vector.
	 */
	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	/**
	 * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
	 *
	 * @return {number} The length of this vector.
	 */
	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	/**
	 * Computes the Manhattan length of this vector.
	 *
	 * @return {number} The length of this vector.
	 */
	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	/**
	 * Converts this vector to a unit vector - that is, sets it equal to a vector
	 * with the same direction as this one, but with a vector length of `1`.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	/**
	 * Computes the angle in radians of this vector with respect to the positive x-axis.
	 *
	 * @return {number} The angle in radians.
	 */
	angle() {

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	/**
	 * Returns the angle between the given vector and this instance in radians.
	 *
	 * @param {Vector2} v - The vector to compute the angle with.
	 * @return {number} The angle in radians.
	 */
	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, -1, 1 ) );

	}

	/**
	 * Computes the distance from the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to compute the distance to.
	 * @return {number} The distance.
	 */
	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	/**
	 * Computes the squared distance from the given vector to this instance.
	 * If you are just comparing the distance with another distance, you should compare
	 * the distance squared instead as it is slightly more efficient to calculate.
	 *
	 * @param {Vector2} v - The vector to compute the squared distance to.
	 * @return {number} The squared distance.
	 */
	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	/**
	 * Computes the Manhattan distance from the given vector to this instance.
	 *
	 * @param {Vector2} v - The vector to compute the Manhattan distance to.
	 * @return {number} The Manhattan distance.
	 */
	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	/**
	 * Sets this vector to a vector with the same direction as this one, but
	 * with the specified length.
	 *
	 * @param {number} length - The new length of this vector.
	 * @return {Vector2} A reference to this vector.
	 */
	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	/**
	 * Linearly interpolates between the given vector and this instance, where
	 * alpha is the percent distance along the line - alpha = 0 will be this
	 * vector, and alpha = 1 will be the given one.
	 *
	 * @param {Vector2} v - The vector to interpolate towards.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector2} A reference to this vector.
	 */
	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	/**
	 * Linearly interpolates between the given vectors, where alpha is the percent
	 * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
	 * be the second one. The result is stored in this instance.
	 *
	 * @param {Vector2} v1 - The first vector.
	 * @param {Vector2} v2 - The second vector.
	 * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
	 * @return {Vector2} A reference to this vector.
	 */
	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	/**
	 * Returns `true` if this vector is equal with the given one.
	 *
	 * @param {Vector2} v - The vector to test for equality.
	 * @return {boolean} Whether this vector is equal with the given one.
	 */
	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	/**
	 * Sets this vector's x value to be `array[ offset ]` and y
	 * value to be `array[ offset + 1 ]`.
	 *
	 * @param {Array<number>} array - An array holding the vector component values.
	 * @param {number} [offset=0] - The offset into the array.
	 * @return {Vector2} A reference to this vector.
	 */
	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	/**
	 * Writes the components of this vector to the given array. If no array is provided,
	 * the method returns a new instance.
	 *
	 * @param {Array<number>} [array=[]] - The target array holding the vector components.
	 * @param {number} [offset=0] - Index of the first element in the array.
	 * @return {Array<number>} The vector components.
	 */
	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	/**
	 * Sets the components of this vector from the given buffer attribute.
	 *
	 * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
	 * @param {number} index - The index into the attribute.
	 * @return {Vector2} A reference to this vector.
	 */
	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	/**
	 * Rotates this vector around the given center by the given angle.
	 *
	 * @param {Vector2} center - The point around which to rotate.
	 * @param {number} angle - The angle to rotate, in radians.
	 * @return {Vector2} A reference to this vector.
	 */
	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	/**
	 * Sets each component of this vector to a pseudo-random value between `0` and
	 * `1`, excluding `1`.
	 *
	 * @return {Vector2} A reference to this vector.
	 */
	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

/**
 * Class for representing a Quaternion. Quaternions are used in three.js to represent rotations.
 *
 * Iterating through a vector instance will yield its components `(x, y, z, w)` in
 * the corresponding order.
 *
 * Note that three.js expects Quaternions to be normalized.
 * ```js
 * const quaternion = new THREE.Quaternion();
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
 *
 * const vector = new THREE.Vector3( 1, 0, 0 );
 * vector.applyQuaternion( quaternion );
 * ```
 */
class Quaternion {

	/**
	 * Constructs a new quaternion.
	 *
	 * @param {number} [x=0] - The x value of this quaternion.
	 * @param {number} [y=0] - The y value of this quaternion.
	 * @param {number} [z=0] - The z value of this quaternion.
	 * @param {number} [w=1] - The w value of this quaternion.
	 */
	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	/**
	 * Interpolates between two quaternions via SLERP. This implementation assumes the
	 * quaternion data are managed  in flat arrays.
	 *
	 * @param {Array<number>} dst - The destination array.
	 * @param {number} dstOffset - An offset into the destination array.
	 * @param {Array<number>} src0 - The source array of the first quaternion.
	 * @param {number} srcOffset0 - An offset into the first source array.
	 * @param {Array<number>} src1 -  The source array of the second quaternion.
	 * @param {number} srcOffset1 - An offset into the second source array.
	 * @param {number} t - The interpolation factor in the range `[0,1]`.
	 * @see {@link Quaternion#slerp}
	 */
	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : -1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	/**
	 * Multiplies two quaternions. This implementation assumes the quaternion data are managed
	 * in flat arrays.
	 *
	 * @param {Array<number>} dst - The destination array.
	 * @param {number} dstOffset - An offset into the destination array.
	 * @param {Array<number>} src0 - The source array of the first quaternion.
	 * @param {number} srcOffset0 - An offset into the first source array.
	 * @param {Array<number>} src1 -  The source array of the second quaternion.
	 * @param {number} srcOffset1 - An offset into the second source array.
	 * @return {Array<number>} The destination array.
	 * @see {@link Quaternion#multiplyQuaternions}.
	 */
	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	/**
	 * The x value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	/**
	 * The y value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	/**
	 * The z value of this quaternion.
	 *
	 * @type {number}
	 * @default 0
	 */
	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	/**
	 * The w value of this quaternion.
	 *
	 * @type {number}
	 * @default 1
	 */
	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	/**
	 * Sets the quaternion components.
	 *
	 * @param {number} x - The x value of this quaternion.
	 * @param {number} y - The y value of this quaternion.
	 * @param {number} z - The z value of this quaternion.
	 * @param {number} w - The w value of this quaternion.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Returns a new quaternion with copied values from this instance.
	 *
	 * @return {Quaternion} A clone of this instance.
	 */
	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	/**
	 * Copies the values of the given quaternion to this instance.
	 *
	 * @param {Quaternion} quaternion - The quaternion to copy.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	/**
	 * Sets this quaternion from the rotation specified by the given
	 * Euler angles.
	 *
	 * @param {Euler} euler - The Euler angles.
	 * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
	 * @return {Quaternion} A reference to this quaternion.
	 */
	setFromEuler( euler, update = true ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				th…222152 tokens truncated…the union of this box and another and the given one, setting the upper
	 * bound of this box to the greater of the two boxes' upper bounds and the
	 * lower bound of this box to the lesser of the two boxes' lower bounds.
	 *
	 * @param {Box2} box - The bounding box that will be unioned with this instance.
	 * @return {Box2} A reference to this bounding box.
	 */
	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	/**
	 * Adds the given offset to both the upper and lower bounds of this bounding box,
	 * effectively moving it in 2D space.
	 *
	 * @param {Vector2} offset - The offset that should be used to translate the bounding box.
	 * @return {Box2} A reference to this bounding box.
	 */
	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	/**
	 * Returns `true` if this bounding box is equal with the given one.
	 *
	 * @param {Box2} box - The box to test for equality.
	 * @return {boolean} Whether this bounding box is equal with the given one.
	 */
	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

}

const _startP = /*@__PURE__*/ new Vector3();
const _startEnd = /*@__PURE__*/ new Vector3();

const _d1 = /*@__PURE__*/ new Vector3();
const _d2 = /*@__PURE__*/ new Vector3();
const _r = /*@__PURE__*/ new Vector3();
const _c1 = /*@__PURE__*/ new Vector3();
const _c2 = /*@__PURE__*/ new Vector3();

/**
 * An analytical line segment in 3D space represented by a start and end point.
 */
class Line3 {

	/**
	 * Constructs a new line segment.
	 *
	 * @param {Vector3} [start=(0,0,0)] - Start of the line segment.
	 * @param {Vector3} [end=(0,0,0)] - End of the line segment.
	 */
	constructor( start = new Vector3(), end = new Vector3() ) {

		/**
		 * Start of the line segment.
		 *
		 * @type {Vector3}
		 */
		this.start = start;

		/**
		 * End of the line segment.
		 *
		 * @type {Vector3}
		 */
		this.end = end;

	}

	/**
	 * Sets the start and end values by copying the given vectors.
	 *
	 * @param {Vector3} start - The start point.
	 * @param {Vector3} end - The end point.
	 * @return {Line3} A reference to this line segment.
	 */
	set( start, end ) {

		this.start.copy( start );
		this.end.copy( end );

		return this;

	}

	/**
	 * Copies the values of the given line segment to this instance.
	 *
	 * @param {Line3} line - The line segment to copy.
	 * @return {Line3} A reference to this line segment.
	 */
	copy( line ) {

		this.start.copy( line.start );
		this.end.copy( line.end );

		return this;

	}

	/**
	 * Returns the center of the line segment.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The center point.
	 */
	getCenter( target ) {

		return target.addVectors( this.start, this.end ).multiplyScalar( 0.5 );

	}

	/**
	 * Returns the delta vector of the line segment's start and end point.
	 *
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The delta vector.
	 */
	delta( target ) {

		return target.subVectors( this.end, this.start );

	}

	/**
	 * Returns the squared Euclidean distance between the line' start and end point.
	 *
	 * @return {number} The squared Euclidean distance.
	 */
	distanceSq() {

		return this.start.distanceToSquared( this.end );

	}

	/**
	 * Returns the Euclidean distance between the line' start and end point.
	 *
	 * @return {number} The Euclidean distance.
	 */
	distance() {

		return this.start.distanceTo( this.end );

	}

	/**
	 * Returns a vector at a certain position along the line segment.
	 *
	 * @param {number} t - A value between `[0,1]` to represent a position along the line segment.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The delta vector.
	 */
	at( t, target ) {

		return this.delta( target ).multiplyScalar( t ).add( this.start );

	}

	/**
	 * Returns a point parameter based on the closest point as projected on the line segment.
	 *
	 * @param {Vector3} point - The point for which to return a point parameter.
	 * @param {boolean} clampToLine - Whether to clamp the result to the range `[0,1]` or not.
	 * @return {number} The point parameter.
	 */
	closestPointToPointParameter( point, clampToLine ) {

		_startP.subVectors( point, this.start );
		_startEnd.subVectors( this.end, this.start );

		const startEnd2 = _startEnd.dot( _startEnd );
		const startEnd_startP = _startEnd.dot( _startP );

		let t = startEnd_startP / startEnd2;

		if ( clampToLine ) {

			t = clamp( t, 0, 1 );

		}

		return t;

	}

	/**
	 * Returns the closest point on the line for a given point.
	 *
	 * @param {Vector3} point - The point to compute the closest point on the line for.
	 * @param {boolean} clampToLine - Whether to clamp the result to the range `[0,1]` or not.
	 * @param {Vector3} target - The target vector that is used to store the method's result.
	 * @return {Vector3} The closest point on the line.
	 */
	closestPointToPoint( point, clampToLine, target ) {

		const t = this.closestPointToPointParameter( point, clampToLine );

		return this.delta( target ).multiplyScalar( t ).add( this.start );

	}

	/**
	 * Returns the closest squared distance between this line segment and the given one.
	 *
	 * @param {Line3} line - The line segment to compute the closest squared distance to.
	 * @param {Vector3} [c1] - The closest point on this line segment.
	 * @param {Vector3} [c2] - The closest point on the given line segment.
	 * @return {number} The squared distance between this line segment and the given one.
	 */
	distanceSqToLine3( line, c1 = _c1, c2 = _c2 ) {

		// from Real-Time Collision Detection by Christer Ericson, chapter 5.1.9

		// Computes closest points C1 and C2 of S1(s)=P1+s*(Q1-P1) and
		// S2(t)=P2+t*(Q2-P2), returning s and t. Function result is squared
		// distance between between S1(s) and S2(t)

		const EPSILON = 1e-8 * 1e-8; // must be squared since we compare squared length
		let s, t;

		const p1 = this.start;
		const p2 = line.start;
		const q1 = this.end;
		const q2 = line.end;

		_d1.subVectors( q1, p1 ); // Direction vector of segment S1
		_d2.subVectors( q2, p2 ); // Direction vector of segment S2
		_r.subVectors( p1, p2 );

		const a = _d1.dot( _d1 ); // Squared length of segment S1, always nonnegative
		const e = _d2.dot( _d2 ); // Squared length of segment S2, always nonnegative
		const f = _d2.dot( _r );

		// Check if either or both segments degenerate into points

		if ( a <= EPSILON && e <= EPSILON ) {

			// Both segments degenerate into points

			c1.copy( p1 );
			c2.copy( p2 );

			c1.sub( c2 );

			return c1.dot( c1 );

		}

		if ( a <= EPSILON ) {

			// First segment degenerates into a point

			s = 0;
			t = f / e; // s = 0 => t = (b*s + f) / e = f / e
			t = clamp( t, 0, 1 );


		} else {

			const c = _d1.dot( _r );

			if ( e <= EPSILON ) {

				// Second segment degenerates into a point

				t = 0;
				s = clamp( - c / a, 0, 1 ); // t = 0 => s = (b*t - c) / a = -c / a

			} else {

				// The general nondegenerate case starts here

				const b = _d1.dot( _d2 );
				const denom = a * e - b * b; // Always nonnegative

				// If segments not parallel, compute closest point on L1 to L2 and
				// clamp to segment S1. Else pick arbitrary s (here 0)

				if ( denom !== 0 ) {

					s = clamp( ( b * f - c * e ) / denom, 0, 1 );

				} else {

					s = 0;

				}

				// Compute point on L2 closest to S1(s) using
				// t = Dot((P1 + D1*s) - P2,D2) / Dot(D2,D2) = (b*s + f) / e

				t = ( b * s + f ) / e;

				// If t in [0,1] done. Else clamp t, recompute s for the new value
				// of t using s = Dot((P2 + D2*t) - P1,D1) / Dot(D1,D1)= (t*b - c) / a
				// and clamp s to [0, 1]

				if ( t < 0 ) {

					t = 0.;
					s = clamp( - c / a, 0, 1 );

				} else if ( t > 1 ) {

					t = 1;
					s = clamp( ( b - c ) / a, 0, 1 );

				}

			}

		}

		c1.copy( p1 ).add( _d1.multiplyScalar( s ) );
		c2.copy( p2 ).add( _d2.multiplyScalar( t ) );

		c1.sub( c2 );

		return c1.dot( c1 );

	}

	/**
	 * Applies a 4x4 transformation matrix to this line segment.
	 *
	 * @param {Matrix4} matrix - The transformation matrix.
	 * @return {Line3} A reference to this line segment.
	 */
	applyMatrix4( matrix ) {

		this.start.applyMatrix4( matrix );
		this.end.applyMatrix4( matrix );

		return this;

	}

	/**
	 * Returns `true` if this line segment is equal with the given one.
	 *
	 * @param {Line3} line - The line segment to test for equality.
	 * @return {boolean} Whether this line segment is equal with the given one.
	 */
	equals( line ) {

		return line.start.equals( this.start ) && line.end.equals( this.end );

	}

	/**
	 * Returns a new line segment with copied values from this instance.
	 *
	 * @return {Line3} A clone of this instance.
	 */
	clone() {

		return new this.constructor().copy( this );

	}

}

const _vector$3 = /*@__PURE__*/ new Vector3();

/**
 * This displays a cone shaped helper object for a {@link SpotLight}.
 *
 * ```js
 * const spotLight = new THREE.SpotLight( 0xffffff );
 * spotLight.position.set( 10, 10, 10 );
 * scene.add( spotLight );
 *
 * const spotLightHelper = new THREE.SpotLightHelper( spotLight );
 * scene.add( spotLightHelper );
 * ```
 *
 * @augments Object3D
 */
class SpotLightHelper extends Object3D {

	/**
	 * Constructs a new spot light helper.
	 *
	 * @param {HemisphereLight} light - The light to be visualized.
	 * @param {number|Color|string} [color] - The helper's color. If not set, the helper will take
	 * the color of the light.
	 */
	constructor( light, color ) {

		super();

		/**
		 * The light being visualized.
		 *
		 * @type {SpotLight}
		 */
		this.light = light;

		this.matrixAutoUpdate = false;

		/**
		 * The color parameter passed in the constructor.
		 * If not set, the helper will take the color of the light.
		 *
		 * @type {number|Color|string}
		 */
		this.color = color;

		this.type = 'SpotLightHelper';

		const geometry = new BufferGeometry();

		const positions = [
			0, 0, 0, 	0, 0, 1,
			0, 0, 0, 	1, 0, 1,
			0, 0, 0,	-1, 0, 1,
			0, 0, 0, 	0, 1, 1,
			0, 0, 0, 	0, -1, 1
		];

		for ( let i = 0, j = 1, l = 32; i < l; i ++, j ++ ) {

			const p1 = ( i / l ) * Math.PI * 2;
			const p2 = ( j / l ) * Math.PI * 2;

			positions.push(
				Math.cos( p1 ), Math.sin( p1 ), 1,
				Math.cos( p2 ), Math.sin( p2 ), 1
			);

		}

		geometry.setAttribute( 'position', new Float32BufferAttribute( positions, 3 ) );

		const material = new LineBasicMaterial( { fog: false, toneMapped: false } );

		this.cone = new LineSegments( geometry, material );
		this.add( this.cone );

		this.update();

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.cone.geometry.dispose();
		this.cone.material.dispose();

	}

	/**
	 * Updates the helper to match the position and direction of the
	 * light being visualized.
	 */
	update() {

		this.light.updateWorldMatrix( true, false );
		this.light.target.updateWorldMatrix( true, false );

		// update the local matrix based on the parent and light target transforms
		if ( this.parent ) {

			this.parent.updateWorldMatrix( true );

			this.matrix
				.copy( this.parent.matrixWorld )
				.invert()
				.multiply( this.light.matrixWorld );

		} else {

			this.matrix.copy( this.light.matrixWorld );

		}

		this.matrixWorld.copy( this.light.matrixWorld );

		const coneLength = this.light.distance ? this.light.distance : 1000;
		const coneWidth = coneLength * Math.tan( this.light.angle );

		this.cone.scale.set( coneWidth, coneWidth, coneLength );

		_vector$3.setFromMatrixPosition( this.light.target.matrixWorld );

		this.cone.lookAt( _vector$3 );

		if ( this.color !== undefined ) {

			this.cone.material.color.set( this.color );

		} else {

			this.cone.material.color.copy( this.light.color );

		}

	}

}

const _vector$2 = /*@__PURE__*/ new Vector3();
const _boneMatrix = /*@__PURE__*/ new Matrix4();
const _matrixWorldInv = /*@__PURE__*/ new Matrix4();

/**
 * A helper object to assist with visualizing a {@link Skeleton}.
 *
 * ```js
 * const helper = new THREE.SkeletonHelper( skinnedMesh );
 * scene.add( helper );
 * ```
 *
 * @augments LineSegments
 */
class SkeletonHelper extends LineSegments {

	/**
	 * Constructs a new skeleton helper.
	 *
	 * @param {Object3D} object -  Usually an instance of {@link SkinnedMesh}. However, any 3D object
	 * can be used if it represents a hierarchy of bones (see {@link Bone}).
	 */
	constructor( object ) {

		const bones = getBoneList( object );

		const geometry = new BufferGeometry();

		const vertices = [];
		const colors = [];

		for ( let i = 0; i < bones.length; i ++ ) {

			const bone = bones[ i ];

			if ( bone.parent && bone.parent.isBone ) {

				vertices.push( 0, 0, 0 );
				vertices.push( 0, 0, 0 );
				colors.push( 0, 0, 0 );
				colors.push( 0, 0, 0 );

			}

		}

		geometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'color', new Float32BufferAttribute( colors, 3 ) );

		const material = new LineBasicMaterial( { vertexColors: true, depthTest: false, depthWrite: false, toneMapped: false, transparent: true } );

		super( geometry, material );

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isSkeletonHelper = true;

		this.type = 'SkeletonHelper';

		/**
		 * The object being visualized.
		 *
		 * @type {Object3D}
		 */
		this.root = object;

		/**
		 * The list of bones that the helper visualizes.
		 *
		 * @type {Array<Bone>}
		 */
		this.bones = bones;

		this.matrix = object.matrixWorld;
		this.matrixAutoUpdate = false;

		// colors

		const color1 = new Color( 0x0000ff );
		const color2 = new Color( 0x00ff00 );

		this.setColors( color1, color2 );

	}

	updateMatrixWorld( force ) {

		const bones = this.bones;

		const geometry = this.geometry;
		const position = geometry.getAttribute( 'position' );

		_matrixWorldInv.copy( this.root.matrixWorld ).invert();

		for ( let i = 0, j = 0; i < bones.length; i ++ ) {

			const bone = bones[ i ];

			if ( bone.parent && bone.parent.isBone ) {

				_boneMatrix.multiplyMatrices( _matrixWorldInv, bone.matrixWorld );
				_vector$2.setFromMatrixPosition( _boneMatrix );
				position.setXYZ( j, _vector$2.x, _vector$2.y, _vector$2.z );

				_boneMatrix.multiplyMatrices( _matrixWorldInv, bone.parent.matrixWorld );
				_vector$2.setFromMatrixPosition( _boneMatrix );
				position.setXYZ( j + 1, _vector$2.x, _vector$2.y, _vector$2.z );

				j += 2;

			}

		}

		geometry.getAttribute( 'position' ).needsUpdate = true;

		super.updateMatrixWorld( force );

	}

	/**
	 * Defines the colors of the helper.
	 *
	 * @param {Color} color1 - The first line color for each bone.
	 * @param {Color} color2 - The second line color for each bone.
	 * @return {SkeletonHelper} A reference to this helper.
	 */
	setColors( color1, color2 ) {

		const geometry = this.geometry;
		const colorAttribute = geometry.getAttribute( 'color' );

		for ( let i = 0; i < colorAttribute.count; i += 2 ) {

			colorAttribute.setXYZ( i, color1.r, color1.g, color1.b );
			colorAttribute.setXYZ( i + 1, color2.r, color2.g, color2.b );

		}

		colorAttribute.needsUpdate = true;

		return this;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

}


function getBoneList( object ) {

	const boneList = [];

	if ( object.isBone === true ) {

		boneList.push( object );

	}

	for ( let i = 0; i < object.children.length; i ++ ) {

		boneList.push( ...getBoneList( object.children[ i ] ) );

	}

	return boneList;

}

/**
 * This displays a helper object consisting of a spherical mesh for
 * visualizing an instance of {@link PointLight}.
 *
 * ```js
 * const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
 * pointLight.position.set( 10, 10, 10 );
 * scene.add( pointLight );
 *
 * const sphereSize = 1;
 * const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
 * scene.add( pointLightHelper );
 * ```
 *
 * @augments Mesh
 */
class PointLightHelper extends Mesh {

	/**
	 * Constructs a new point light helper.
	 *
	 * @param {PointLight} light - The light to be visualized.
	 * @param {number} [sphereSize=1] - The size of the sphere helper.
	 * @param {number|Color|string} [color] - The helper's color. If not set, the helper will take
	 * the color of the light.
	 */
	constructor( light, sphereSize, color ) {

		const geometry = new SphereGeometry( sphereSize, 4, 2 );
		const material = new MeshBasicMaterial( { wireframe: true, fog: false, toneMapped: false } );

		super( geometry, material );

		/**
		 * The light being visualized.
		 *
		 * @type {HemisphereLight}
		 */
		this.light = light;

		/**
		 * The color parameter passed in the constructor.
		 * If not set, the helper will take the color of the light.
		 *
		 * @type {number|Color|string}
		 */
		this.color = color;

		this.type = 'PointLightHelper';

		this.matrix = this.light.matrixWorld;
		this.matrixAutoUpdate = false;

		this.update();


		/*
	// TODO: delete this comment?
	const distanceGeometry = new THREE.IcosahedronGeometry( 1, 2 );
	const distanceMaterial = new THREE.MeshBasicMaterial( { color: hexColor, fog: false, wireframe: true, opacity: 0.1, transparent: true } );

	this.lightSphere = new THREE.Mesh( bulbGeometry, bulbMaterial );
	this.lightDistance = new THREE.Mesh( distanceGeometry, distanceMaterial );

	const d = light.distance;

	if ( d === 0.0 ) {

		this.lightDistance.visible = false;

	} else {

		this.lightDistance.scale.set( d, d, d );

	}

	this.add( this.lightDistance );
	*/

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

	/**
	 * Updates the helper to match the position of the
	 * light being visualized.
	 */
	update() {

		this.light.updateWorldMatrix( true, false );

		if ( this.color !== undefined ) {

			this.material.color.set( this.color );

		} else {

			this.material.color.copy( this.light.color );

		}

		/*
		const d = this.light.distance;

		if ( d === 0.0 ) {

			this.lightDistance.visible = false;

		} else {

			this.lightDistance.visible = true;
			this.lightDistance.scale.set( d, d, d );

		}
		*/

	}

}

const _vector$1 = /*@__PURE__*/ new Vector3();
const _color1 = /*@__PURE__*/ new Color();
const _color2 = /*@__PURE__*/ new Color();

/**
 * Creates a visual aid consisting of a spherical mesh for a
 * given {@link HemisphereLight}.
 *
 * ```js
 * const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
 * const helper = new THREE.HemisphereLightHelper( light, 5 );
 * scene.add( helper );
 * ```
 *
 * @augments Object3D
 */
class HemisphereLightHelper extends Object3D {

	/**
	 * Constructs a new hemisphere light helper.
	 *
	 * @param {HemisphereLight} light - The light to be visualized.
	 * @param {number} [size=1] - The size of the mesh used to visualize the light.
	 * @param {number|Color|string} [color] - The helper's color. If not set, the helper will take
	 * the color of the light.
	 */
	constructor( light, size, color ) {

		super();

		/**
		 * The light being visualized.
		 *
		 * @type {HemisphereLight}
		 */
		this.light = light;

		this.matrix = light.matrixWorld;
		this.matrixAutoUpdate = false;

		/**
		 * The color parameter passed in the constructor.
		 * If not set, the helper will take the color of the light.
		 *
		 * @type {number|Color|string}
		 */
		this.color = color;

		this.type = 'HemisphereLightHelper';

		const geometry = new OctahedronGeometry( size );
		geometry.rotateY( Math.PI * 0.5 );

		this.material = new MeshBasicMaterial( { wireframe: true, fog: false, toneMapped: false } );
		if ( this.color === undefined ) this.material.vertexColors = true;

		const position = geometry.getAttribute( 'position' );
		const colors = new Float32Array( position.count * 3 );

		geometry.setAttribute( 'color', new BufferAttribute( colors, 3 ) );

		this.add( new Mesh( geometry, this.material ) );

		this.update();

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.children[ 0 ].geometry.dispose();
		this.children[ 0 ].material.dispose();

	}

	/**
	 * Updates the helper to match the position and direction of the
	 * light being visualized.
	 */
	update() {

		const mesh = this.children[ 0 ];

		if ( this.color !== undefined ) {

			this.material.color.set( this.color );

		} else {

			const colors = mesh.geometry.getAttribute( 'color' );

			_color1.copy( this.light.color );
			_color2.copy( this.light.groundColor );

			for ( let i = 0, l = colors.count; i < l; i ++ ) {

				const color = ( i < ( l / 2 ) ) ? _color1 : _color2;

				colors.setXYZ( i, color.r, color.g, color.b );

			}

			colors.needsUpdate = true;

		}

		this.light.updateWorldMatrix( true, false );

		mesh.lookAt( _vector$1.setFromMatrixPosition( this.light.matrixWorld ).negate() );

	}

}

/**
 * The helper is an object to define grids. Grids are two-dimensional
 * arrays of lines.
 *
 * ```js
 * const size = 10;
 * const divisions = 10;
 *
 * const gridHelper = new THREE.GridHelper( size, divisions );
 * scene.add( gridHelper );
 * ```
 *
 * @augments LineSegments
 */
class GridHelper extends LineSegments {

	/**
	 * Constructs a new grid helper.
	 *
	 * @param {number} [size=10] - The size of the grid.
	 * @param {number} [divisions=10] - The number of divisions across the grid.
	 * @param {number|Color|string} [color1=0x444444] - The color of the center line.
	 * @param {number|Color|string} [color2=0x888888] - The color of the lines of the grid.
	 */
	constructor( size = 10, divisions = 10, color1 = 0x444444, color2 = 0x888888 ) {

		color1 = new Color( color1 );
		color2 = new Color( color2 );

		const center = divisions / 2;
		const step = size / divisions;
		const halfSize = size / 2;

		const vertices = [], colors = [];

		for ( let i = 0, j = 0, k = - halfSize; i <= divisions; i ++, k += step ) {

			vertices.push( - halfSize, 0, k, halfSize, 0, k );
			vertices.push( k, 0, - halfSize, k, 0, halfSize );

			const color = i === center ? color1 : color2;

			color.toArray( colors, j ); j += 3;
			color.toArray( colors, j ); j += 3;
			color.toArray( colors, j ); j += 3;
			color.toArray( colors, j ); j += 3;

		}

		const geometry = new BufferGeometry();
		geometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'color', new Float32BufferAttribute( colors, 3 ) );

		const material = new LineBasicMaterial( { vertexColors: true, toneMapped: false } );

		super( geometry, material );

		this.type = 'GridHelper';

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

}

/**
 * This helper is an object to define polar grids. Grids are
 * two-dimensional arrays of lines.
 *
 * ```js
 * const radius = 10;
 * const sectors = 16;
 * const rings = 8;
 * const divisions = 64;
 *
 * const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions );
 * scene.add( helper );
 * ```
 *
 * @augments LineSegments
 */
class PolarGridHelper extends LineSegments {

	/**
	 * Constructs a new polar grid helper.
	 *
	 * @param {number} [radius=10] - The radius of the polar grid. This can be any positive number.
	 * @param {number} [sectors=16] - The number of sectors the grid will be divided into. This can be any positive integer.
	 * @param {number} [rings=16] - The number of rings. This can be any positive integer.
	 * @param {number} [divisions=64] - The number of line segments used for each circle. This can be any positive integer.
	 * @param {number|Color|string} [color1=0x444444] - The first color used for grid elements.
	 * @param {number|Color|string} [color2=0x888888] -  The second color used for grid elements.
	 */
	constructor( radius = 10, sectors = 16, rings = 8, divisions = 64, color1 = 0x444444, color2 = 0x888888 ) {

		color1 = new Color( color1 );
		color2 = new Color( color2 );

		const vertices = [];
		const colors = [];

		// create the sectors

		if ( sectors > 1 ) {

			for ( let i = 0; i < sectors; i ++ ) {

				const v = ( i / sectors ) * ( Math.PI * 2 );

				const x = Math.sin( v ) * radius;
				const z = Math.cos( v ) * radius;

				vertices.push( 0, 0, 0 );
				vertices.push( x, 0, z );

				const color = ( i & 1 ) ? color1 : color2;

				colors.push( color.r, color.g, color.b );
				colors.push( color.r, color.g, color.b );

			}

		}

		// create the rings

		for ( let i = 0; i < rings; i ++ ) {

			const color = ( i & 1 ) ? color1 : color2;

			const r = radius - ( radius / rings * i );

			for ( let j = 0; j < divisions; j ++ ) {

				// first vertex

				let v = ( j / divisions ) * ( Math.PI * 2 );

				let x = Math.sin( v ) * r;
				let z = Math.cos( v ) * r;

				vertices.push( x, 0, z );
				colors.push( color.r, color.g, color.b );

				// second vertex

				v = ( ( j + 1 ) / divisions ) * ( Math.PI * 2 );

				x = Math.sin( v ) * r;
				z = Math.cos( v ) * r;

				vertices.push( x, 0, z );
				colors.push( color.r, color.g, color.b );

			}

		}

		const geometry = new BufferGeometry();
		geometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'color', new Float32BufferAttribute( colors, 3 ) );

		const material = new LineBasicMaterial( { vertexColors: true, toneMapped: false } );

		super( geometry, material );

		this.type = 'PolarGridHelper';

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

}

const _v1 = /*@__PURE__*/ new Vector3();
const _v2 = /*@__PURE__*/ new Vector3();
const _v3 = /*@__PURE__*/ new Vector3();

/**
 * Helper object to assist with visualizing a {@link DirectionalLight}'s
 * effect on the scene. This consists of plane and a line representing the
 * light's position and direction.
 *
 * ```js
 * const light = new THREE.DirectionalLight( 0xFFFFFF );
 * scene.add( light );
 *
 * const helper = new THREE.DirectionalLightHelper( light, 5 );
 * scene.add( helper );
 * ```
 *
 * @augments Object3D
 */
class DirectionalLightHelper extends Object3D {

	/**
	 * Constructs a new directional light helper.
	 *
	 * @param {DirectionalLight} light - The light to be visualized.
	 * @param {number} [size=1] - The dimensions of the plane.
	 * @param {number|Color|string} [color] - The helper's color. If not set, the helper will take
	 * the color of the light.
	 */
	constructor( light, size, color ) {

		super();

		/**
		 * The light being visualized.
		 *
		 * @type {DirectionalLight}
		 */
		this.light = light;

		this.matrix = light.matrixWorld;
		this.matrixAutoUpdate = false;

		/**
		 * The color parameter passed in the constructor.
		 * If not set, the helper will take the color of the light.
		 *
		 * @type {number|Color|string}
		 */
		this.color = color;

		this.type = 'DirectionalLightHelper';

		if ( size === undefined ) size = 1;

		let geometry = new BufferGeometry();
		geometry.setAttribute( 'position', new Float32BufferAttribute( [
			- size, size, 0,
			size, size, 0,
			size, - size, 0,
			- size, - size, 0,
			- size, size, 0
		], 3 ) );

		const material = new LineBasicMaterial( { fog: false, toneMapped: false } );

		/**
		 * Contains the line showing the location of the directional light.
		 *
		 * @type {Line}
		 */
		this.lightPlane = new Line( geometry, material );
		this.add( this.lightPlane );

		geometry = new BufferGeometry();
		geometry.setAttribute( 'position', new Float32BufferAttribute( [ 0, 0, 0, 0, 0, 1 ], 3 ) );

		/**
		 * Represents the target line of the directional light.
		 *
		 * @type {Line}
		 */
		this.targetLine = new Line( geometry, material );
		this.add( this.targetLine );

		this.update();

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.lightPlane.geometry.dispose();
		this.lightPlane.material.dispose();
		this.targetLine.geometry.dispose();
		this.targetLine.material.dispose();

	}

	/**
	 * Updates the helper to match the position and direction of the
	 * light being visualized.
	 */
	update() {

		this.light.updateWorldMatrix( true, false );
		this.light.target.updateWorldMatrix( true, false );

		_v1.setFromMatrixPosition( this.light.matrixWorld );
		_v2.setFromMatrixPosition( this.light.target.matrixWorld );
		_v3.subVectors( _v2, _v1 );

		this.lightPlane.lookAt( _v2 );

		if ( this.color !== undefined ) {

			this.lightPlane.material.color.set( this.color );
			this.targetLine.material.color.set( this.color );

		} else {

			this.lightPlane.material.color.copy( this.light.color );
			this.targetLine.material.color.copy( this.light.color );

		}

		this.targetLine.lookAt( _v2 );
		this.targetLine.scale.z = _v3.length();

	}

}

const _vector = /*@__PURE__*/ new Vector3();
const _camera = /*@__PURE__*/ new Camera();

/**
 * This helps with visualizing what a camera contains in its frustum. It
 * visualizes the frustum of a camera using a line segments.
 *
 * Based on frustum visualization in [lightgl.js shadowmap example]{@link https://github.com/evanw/lightgl.js/blob/master/tests/shadowmap.html}.
 *
 * `CameraHelper` must be a child of the scene.
 *
 * ```js
 * const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 * const helper = new THREE.CameraHelper( camera );
 * scene.add( helper );
 * ```
 *
 * @augments LineSegments
 */
class CameraHelper extends LineSegments {

	/**
	 * Constructs a new arrow helper.
	 *
	 * @param {Camera} camera - The camera to visualize.
	 */
	constructor( camera ) {

		const geometry = new BufferGeometry();
		const material = new LineBasicMaterial( { color: 0xffffff, vertexColors: true, toneMapped: false } );

		const vertices = [];
		const colors = [];

		const pointMap = {};

		// near

		addLine( 'n1', 'n2' );
		addLine( 'n2', 'n4' );
		addLine( 'n4', 'n3' );
		addLine( 'n3', 'n1' );

		// far

		addLine( 'f1', 'f2' );
		addLine( 'f2', 'f4' );
		addLine( 'f4', 'f3' );
		addLine( 'f3', 'f1' );

		// sides

		addLine( 'n1', 'f1' );
		addLine( 'n2', 'f2' );
		addLine( 'n3', 'f3' );
		addLine( 'n4', 'f4' );

		// cone

		addLine( 'p', 'n1' );
		addLine( 'p', 'n2' );
		addLine( 'p', 'n3' );
		addLine( 'p', 'n4' );

		// up

		addLine( 'u1', 'u2' );
		addLine( 'u2', 'u3' );
		addLine( 'u3', 'u1' );

		// target

		addLine( 'c', 't' );
		addLine( 'p', 'c' );

		// cross

		addLine( 'cn1', 'cn2' );
		addLine( 'cn3', 'cn4' );

		addLine( 'cf1', 'cf2' );
		addLine( 'cf3', 'cf4' );

		function addLine( a, b ) {

			addPoint( a );
			addPoint( b );

		}

		function addPoint( id ) {

			vertices.push( 0, 0, 0 );
			colors.push( 0, 0, 0 );

			if ( pointMap[ id ] === undefined ) {

				pointMap[ id ] = [];

			}

			pointMap[ id ].push( ( vertices.length / 3 ) - 1 );

		}

		geometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'color', new Float32BufferAttribute( colors, 3 ) );

		super( geometry, material );

		this.type = 'CameraHelper';

		/**
		 * The camera being visualized.
		 *
		 * @type {Camera}
		 */
		this.camera = camera;
		if ( this.camera.updateProjectionMatrix ) this.camera.updateProjectionMatrix();

		this.matrix = camera.matrixWorld;
		this.matrixAutoUpdate = false;

		/**
		 * This contains the points used to visualize the camera.
		 *
		 * @type {Object<string,Array<number>>}
		 */
		this.pointMap = pointMap;

		this.update();

		// colors

		const colorFrustum = new Color( 0xffaa00 );
		const colorCone = new Color( 0xff0000 );
		const colorUp = new Color( 0x00aaff );
		const colorTarget = new Color( 0xffffff );
		const colorCross = new Color( 0x333333 );

		this.setColors( colorFrustum, colorCone, colorUp, colorTarget, colorCross );

	}

	/**
	 * Defines the colors of the helper.
	 *
	 * @param {Color} frustum - The frustum line color.
	 * @param {Color} cone - The cone line color.
	 * @param {Color} up - The up line color.
	 * @param {Color} target - The target line color.
	 * @param {Color} cross - The cross line color.
	 * @return {CameraHelper} A reference to this helper.
	 */
	setColors( frustum, cone, up, target, cross ) {

		const geometry = this.geometry;

		const colorAttribute = geometry.getAttribute( 'color' );

		// near

		colorAttribute.setXYZ( 0, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 1, frustum.r, frustum.g, frustum.b ); // n1, n2
		colorAttribute.setXYZ( 2, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 3, frustum.r, frustum.g, frustum.b ); // n2, n4
		colorAttribute.setXYZ( 4, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 5, frustum.r, frustum.g, frustum.b ); // n4, n3
		colorAttribute.setXYZ( 6, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 7, frustum.r, frustum.g, frustum.b ); // n3, n1

		// far

		colorAttribute.setXYZ( 8, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 9, frustum.r, frustum.g, frustum.b ); // f1, f2
		colorAttribute.setXYZ( 10, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 11, frustum.r, frustum.g, frustum.b ); // f2, f4
		colorAttribute.setXYZ( 12, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 13, frustum.r, frustum.g, frustum.b ); // f4, f3
		colorAttribute.setXYZ( 14, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 15, frustum.r, frustum.g, frustum.b ); // f3, f1

		// sides

		colorAttribute.setXYZ( 16, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 17, frustum.r, frustum.g, frustum.b ); // n1, f1
		colorAttribute.setXYZ( 18, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 19, frustum.r, frustum.g, frustum.b ); // n2, f2
		colorAttribute.setXYZ( 20, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 21, frustum.r, frustum.g, frustum.b ); // n3, f3
		colorAttribute.setXYZ( 22, frustum.r, frustum.g, frustum.b ); colorAttribute.setXYZ( 23, frustum.r, frustum.g, frustum.b ); // n4, f4

		// cone

		colorAttribute.setXYZ( 24, cone.r, cone.g, cone.b ); colorAttribute.setXYZ( 25, cone.r, cone.g, cone.b ); // p, n1
		colorAttribute.setXYZ( 26, cone.r, cone.g, cone.b ); colorAttribute.setXYZ( 27, cone.r, cone.g, cone.b ); // p, n2
		colorAttribute.setXYZ( 28, cone.r, cone.g, cone.b ); colorAttribute.setXYZ( 29, cone.r, cone.g, cone.b ); // p, n3
		colorAttribute.setXYZ( 30, cone.r, cone.g, cone.b ); colorAttribute.setXYZ( 31, cone.r, cone.g, cone.b ); // p, n4

		// up

		colorAttribute.setXYZ( 32, up.r, up.g, up.b ); colorAttribute.setXYZ( 33, up.r, up.g, up.b ); // u1, u2
		colorAttribute.setXYZ( 34, up.r, up.g, up.b ); colorAttribute.setXYZ( 35, up.r, up.g, up.b ); // u2, u3
		colorAttribute.setXYZ( 36, up.r, up.g, up.b ); colorAttribute.setXYZ( 37, up.r, up.g, up.b ); // u3, u1

		// target

		colorAttribute.setXYZ( 38, target.r, target.g, target.b ); colorAttribute.setXYZ( 39, target.r, target.g, target.b ); // c, t
		colorAttribute.setXYZ( 40, cross.r, cross.g, cross.b ); colorAttribute.setXYZ( 41, cross.r, cross.g, cross.b ); // p, c

		// cross

		colorAttribute.setXYZ( 42, cross.r, cross.g, cross.b ); colorAttribute.setXYZ( 43, cross.r, cross.g, cross.b ); // cn1, cn2
		colorAttribute.setXYZ( 44, cross.r, cross.g, cross.b ); colorAttribute.setXYZ( 45, cross.r, cross.g, cross.b ); // cn3, cn4

		colorAttribute.setXYZ( 46, cross.r, cross.g, cross.b ); colorAttribute.setXYZ( 47, cross.r, cross.g, cross.b ); // cf1, cf2
		colorAttribute.setXYZ( 48, cross.r, cross.g, cross.b ); colorAttribute.setXYZ( 49, cross.r, cross.g, cross.b ); // cf3, cf4

		colorAttribute.needsUpdate = true;

		return this;

	}

	/**
	 * Updates the helper based on the projection matrix of the camera.
	 */
	update() {

		const geometry = this.geometry;
		const pointMap = this.pointMap;

		const w = 1, h = 1;

		let nearZ, farZ;

		// we need just camera projection matrix inverse
		// world matrix must be identity

		_camera.projectionMatrixInverse.copy( this.camera.projectionMatrixInverse );

		// Adjust z values based on coordinate system

		if ( this.camera.reversedDepth === true ) {

			nearZ = 1;
			farZ = 0;

		} else {

			if ( this.camera.coordinateSystem === WebGLCoordinateSystem ) {

				nearZ = -1;
				farZ = 1;

			} else if ( this.camera.coordinateSystem === WebGPUCoordinateSystem ) {

				nearZ = 0;
				farZ = 1;

			} else {

				throw new Error( 'THREE.CameraHelper.update(): Invalid coordinate system: ' + this.camera.coordinateSystem );

			}

		}


		// center / target
		setPoint( 'c', pointMap, geometry, _camera, 0, 0, nearZ );
		setPoint( 't', pointMap, geometry, _camera, 0, 0, farZ );

		// near

		setPoint( 'n1', pointMap, geometry, _camera, - w, - h, nearZ );
		setPoint( 'n2', pointMap, geometry, _camera, w, - h, nearZ );
		setPoint( 'n3', pointMap, geometry, _camera, - w, h, nearZ );
		setPoint( 'n4', pointMap, geometry, _camera, w, h, nearZ );

		// far

		setPoint( 'f1', pointMap, geometry, _camera, - w, - h, farZ );
		setPoint( 'f2', pointMap, geometry, _camera, w, - h, farZ );
		setPoint( 'f3', pointMap, geometry, _camera, - w, h, farZ );
		setPoint( 'f4', pointMap, geometry, _camera, w, h, farZ );

		// up

		setPoint( 'u1', pointMap, geometry, _camera, w * 0.7, h * 1.1, nearZ );
		setPoint( 'u2', pointMap, geometry, _camera, - w * 0.7, h * 1.1, nearZ );
		setPoint( 'u3', pointMap, geometry, _camera, 0, h * 2, nearZ );

		// cross

		setPoint( 'cf1', pointMap, geometry, _camera, - w, 0, farZ );
		setPoint( 'cf2', pointMap, geometry, _camera, w, 0, farZ );
		setPoint( 'cf3', pointMap, geometry, _camera, 0, - h, farZ );
		setPoint( 'cf4', pointMap, geometry, _camera, 0, h, farZ );

		setPoint( 'cn1', pointMap, geometry, _camera, - w, 0, nearZ );
		setPoint( 'cn2', pointMap, geometry, _camera, w, 0, nearZ );
		setPoint( 'cn3', pointMap, geometry, _camera, 0, - h, nearZ );
		setPoint( 'cn4', pointMap, geometry, _camera, 0, h, nearZ );

		geometry.getAttribute( 'position' ).needsUpdate = true;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

}


function setPoint( point, pointMap, geometry, camera, x, y, z ) {

	_vector.set( x, y, z ).unproject( camera );

	const points = pointMap[ point ];

	if ( points !== undefined ) {

		const position = geometry.getAttribute( 'position' );

		for ( let i = 0, l = points.length; i < l; i ++ ) {

			position.setXYZ( points[ i ], _vector.x, _vector.y, _vector.z );

		}

	}

}

const _box = /*@__PURE__*/ new Box3();

/**
 * Helper object to graphically show the world-axis-aligned bounding box
 * around an object. The actual bounding box is handled with {@link Box3},
 * this is just a visual helper for debugging. It can be automatically
 * resized with {@link BoxHelper#update} when the object it's created from
 * is transformed. Note that the object must have a geometry for this to work,
 * so it won't work with sprites.
 *
 * ```js
 * const sphere = new THREE.SphereGeometry();
 * const object = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( 0xff0000 ) );
 * const box = new THREE.BoxHelper( object, 0xffff00 );
 * scene.add( box );
 * ```
 *
 * @augments LineSegments
 */
class BoxHelper extends LineSegments {

	/**
	 * Constructs a new box helper.
	 *
	 * @param {Object3D} [object] - The 3D object to show the world-axis-aligned bounding box.
	 * @param {number|Color|string} [color=0xffff00] - The box's color.
	 */
	constructor( object, color = 0xffff00 ) {

		const indices = new Uint16Array( [ 0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7 ] );
		const positions = new Float32Array( 8 * 3 );

		const geometry = new BufferGeometry();
		geometry.setIndex( new BufferAttribute( indices, 1 ) );
		geometry.setAttribute( 'position', new BufferAttribute( positions, 3 ) );

		super( geometry, new LineBasicMaterial( { color: color, toneMapped: false } ) );

		/**
		 * The 3D object being visualized.
		 *
		 * @type {Object3D}
		 */
		this.object = object;
		this.type = 'BoxHelper';

		this.matrixAutoUpdate = false;

		this.update();

	}

	/**
	 * Updates the helper's geometry to match the dimensions of the object,
	 * including any children.
	 */
	update() {

		if ( this.object !== undefined ) {

			_box.setFromObject( this.object );

		}

		if ( _box.isEmpty() ) return;

		const min = _box.min;
		const max = _box.max;

		/*
			5____4
		1/___0/|
		| 6__|_7
		2/___3/

		0: max.x, max.y, max.z
		1: min.x, max.y, max.z
		2: min.x, min.y, max.z
		3: max.x, min.y, max.z
		4: max.x, max.y, min.z
		5: min.x, max.y, min.z
		6: min.x, min.y, min.z
		7: max.x, min.y, min.z
		*/

		const position = this.geometry.attributes.position;
		const array = position.array;

		array[ 0 ] = max.x; array[ 1 ] = max.y; array[ 2 ] = max.z;
		array[ 3 ] = min.x; array[ 4 ] = max.y; array[ 5 ] = max.z;
		array[ 6 ] = min.x; array[ 7 ] = min.y; array[ 8 ] = max.z;
		array[ 9 ] = max.x; array[ 10 ] = min.y; array[ 11 ] = max.z;
		array[ 12 ] = max.x; array[ 13 ] = max.y; array[ 14 ] = min.z;
		array[ 15 ] = min.x; array[ 16 ] = max.y; array[ 17 ] = min.z;
		array[ 18 ] = min.x; array[ 19 ] = min.y; array[ 20 ] = min.z;
		array[ 21 ] = max.x; array[ 22 ] = min.y; array[ 23 ] = min.z;

		position.needsUpdate = true;

		this.geometry.computeBoundingSphere();

	}

	/**
	 * Updates the wireframe box for the passed object.
	 *
	 * @param {Object3D} object - The 3D object to create the helper for.
	 * @return {BoxHelper} A reference to this instance.
	 */
	setFromObject( object ) {

		this.object = object;
		this.update();

		return this;

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.object = source.object;

		return this;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

}

/**
 * A helper object to visualize an instance of {@link Box3}.
 *
 * ```js
 * const box = new THREE.Box3();
 * box.setFromCenterAndSize( new THREE.Vector3( 1, 1, 1 ), new THREE.Vector3( 2, 1, 3 ) );
 *
 * const helper = new THREE.Box3Helper( box, 0xffff00 );
 * scene.add( helper )
 * ```
 *
 * @augments LineSegments
 */
class Box3Helper extends LineSegments {

	/**
	 * Constructs a new box3 helper.
	 *
	 * @param {Box3} box - The box to visualize.
	 * @param {number|Color|string} [color=0xffff00] - The box's color.
	 */
	constructor( box, color = 0xffff00 ) {

		const indices = new Uint16Array( [ 0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7 ] );

		const positions = [ 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1 ];

		const geometry = new BufferGeometry();

		geometry.setIndex( new BufferAttribute( indices, 1 ) );

		geometry.setAttribute( 'position', new Float32BufferAttribute( positions, 3 ) );

		super( geometry, new LineBasicMaterial( { color: color, toneMapped: false } ) );

		/**
		 * The box being visualized.
		 *
		 * @type {Box3}
		 */
		this.box = box;

		this.type = 'Box3Helper';

		this.geometry.computeBoundingSphere();

	}

	updateMatrixWorld( force ) {

		const box = this.box;

		if ( box.isEmpty() ) return;

		box.getCenter( this.position );

		box.getSize( this.scale );

		this.scale.multiplyScalar( 0.5 );

		super.updateMatrixWorld( force );

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

}

/**
 * A helper object to visualize an instance of {@link Plane}.
 *
 * ```js
 * const plane = new THREE.Plane( new THREE.Vector3( 1, 1, 0.2 ), 3 );
 * const helper = new THREE.PlaneHelper( plane, 1, 0xffff00 );
 * scene.add( helper );
 * ```
 *
 * @augments Line
 */
class PlaneHelper extends Line {

	/**
	 * Constructs a new plane helper.
	 *
	 * @param {Plane} plane - The plane to be visualized.
	 * @param {number} [size=1] - The side length of plane helper.
	 * @param {number|Color|string} [hex=0xffff00] - The helper's color.
	 */
	constructor( plane, size = 1, hex = 0xffff00 ) {

		const color = hex;

		const positions = [ 1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0 ];

		const geometry = new BufferGeometry();
		geometry.setAttribute( 'position', new Float32BufferAttribute( positions, 3 ) );
		geometry.computeBoundingSphere();

		super( geometry, new LineBasicMaterial( { color: color, toneMapped: false } ) );

		this.type = 'PlaneHelper';

		/**
		 * The plane being visualized.
		 *
		 * @type {Plane}
		 */
		this.plane = plane;

		/**
		 * The side length of plane helper.
		 *
		 * @type {number}
		 * @default 1
		 */
		this.size = size;

		const positions2 = [ 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0 ];

		const geometry2 = new BufferGeometry();
		geometry2.setAttribute( 'position', new Float32BufferAttribute( positions2, 3 ) );
		geometry2.computeBoundingSphere();

		this.add( new Mesh( geometry2, new MeshBasicMaterial( { color: color, opacity: 0.2, transparent: true, depthWrite: false, toneMapped: false } ) ) );

	}

	updateMatrixWorld( force ) {

		this.position.set( 0, 0, 0 );

		this.scale.set( 0.5 * this.size, 0.5 * this.size, 1 );

		this.lookAt( this.plane.normal );

		this.translateZ( - this.plane.constant );

		super.updateMatrixWorld( force );

	}

	/**
	 * Updates the helper to match the position and direction of the
	 * light being visualized.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();
		this.children[ 0 ].geometry.dispose();
		this.children[ 0 ].material.dispose();

	}

}

const _axis = /*@__PURE__*/ new Vector3();
let _lineGeometry, _coneGeometry;

/**
 * An 3D arrow object for visualizing directions.
 *
 * ```js
 * const dir = new THREE.Vector3( 1, 2, 0 );
 *
 * //normalize the direction vector (convert to vector of length 1)
 * dir.normalize();
 *
 * const origin = new THREE.Vector3( 0, 0, 0 );
 * const length = 1;
 * const hex = 0xffff00;
 *
 * const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
 * scene.add( arrowHelper );
 * ```
 *
 * @augments Object3D
 */
class ArrowHelper extends Object3D {

	/**
	 * Constructs a new arrow helper.
	 *
	 * @param {Vector3} [dir=(0, 0, 1)] - The (normalized) direction vector.
	 * @param {Vector3} [origin=(0, 0, 0)] - Point at which the arrow starts.
	 * @param {number} [length=1] - Length of the arrow in world units.
	 * @param {(number|Color|string)} [color=0xffff00] - Color of the arrow.
	 * @param {number} [headLength=length*0.2] - The length of the head of the arrow.
	 * @param {number} [headWidth=headLength*0.2] - The width of the head of the arrow.
	 */
	constructor( dir = new Vector3( 0, 0, 1 ), origin = new Vector3( 0, 0, 0 ), length = 1, color = 0xffff00, headLength = length * 0.2, headWidth = headLength * 0.2 ) {

		super();

		this.type = 'ArrowHelper';

		if ( _lineGeometry === undefined ) {

			_lineGeometry = new BufferGeometry();
			_lineGeometry.setAttribute( 'position', new Float32BufferAttribute( [ 0, 0, 0, 0, 1, 0 ], 3 ) );

			_coneGeometry = new ConeGeometry( 0.5, 1, 5, 1 );
			_coneGeometry.translate( 0, -0.5, 0 );

		}

		this.position.copy( origin );

		/**
		 * The line part of the arrow helper.
		 *
		 * @type {Line}
		 */
		this.line = new Line( _lineGeometry, new LineBasicMaterial( { color: color, toneMapped: false } ) );
		this.line.matrixAutoUpdate = false;
		this.add( this.line );

		/**
		 * The cone part of the arrow helper.
		 *
		 * @type {Mesh}
		 */
		this.cone = new Mesh( _coneGeometry, new MeshBasicMaterial( { color: color, toneMapped: false } ) );
		this.cone.matrixAutoUpdate = false;
		this.add( this.cone );

		this.setDirection( dir );
		this.setLength( length, headLength, headWidth );

	}

	/**
	 * Sets the direction of the helper.
	 *
	 * @param {Vector3} dir - The normalized direction vector.
	 */
	setDirection( dir ) {

		// dir is assumed to be normalized

		if ( dir.y > 0.99999 ) {

			this.quaternion.set( 0, 0, 0, 1 );

		} else if ( dir.y < -0.99999 ) {

			this.quaternion.set( 1, 0, 0, 0 );

		} else {

			_axis.set( dir.z, 0, - dir.x ).normalize();

			const radians = Math.acos( dir.y );

			this.quaternion.setFromAxisAngle( _axis, radians );

		}

	}

	/**
	 * Sets the length of the helper.
	 *
	 * @param {number} length - Length of the arrow in world units.
	 * @param {number} [headLength=length*0.2] - The length of the head of the arrow.
	 * @param {number} [headWidth=headLength*0.2] - The width of the head of the arrow.
	 */
	setLength( length, headLength = length * 0.2, headWidth = headLength * 0.2 ) {

		this.line.scale.set( 1, Math.max( 0.0001, length - headLength ), 1 ); // see #17458
		this.line.updateMatrix();

		this.cone.scale.set( headWidth, headLength, headWidth );
		this.cone.position.y = length;
		this.cone.updateMatrix();

	}

	/**
	 * Sets the color of the helper.
	 *
	 * @param {number|Color|string} color - The color to set.
	 */
	setColor( color ) {

		this.line.material.color.set( color );
		this.cone.material.color.set( color );

	}

	copy( source ) {

		super.copy( source, false );

		this.line.copy( source.line );
		this.cone.copy( source.cone );

		return this;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.line.geometry.dispose();
		this.line.material.dispose();
		this.cone.geometry.dispose();
		this.cone.material.dispose();

	}

}

/**
 * An axis object to visualize the 3 axes in a simple way.
 * The X axis is red. The Y axis is green. The Z axis is blue.
 *
 * ```js
 * const axesHelper = new THREE.AxesHelper( 5 );
 * scene.add( axesHelper );
 * ```
 *
 * @augments LineSegments
 */
class AxesHelper extends LineSegments {

	/**
	 * Constructs a new axes helper.
	 *
	 * @param {number} [size=1] - Size of the lines representing the axes.
	 */
	constructor( size = 1 ) {

		const vertices = [
			0, 0, 0,	size, 0, 0,
			0, 0, 0,	0, size, 0,
			0, 0, 0,	0, 0, size
		];

		const colors = [
			1, 0, 0,	1, 0.6, 0,
			0, 1, 0,	0.6, 1, 0,
			0, 0, 1,	0, 0.6, 1
		];

		const geometry = new BufferGeometry();
		geometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		geometry.setAttribute( 'color', new Float32BufferAttribute( colors, 3 ) );

		const material = new LineBasicMaterial( { vertexColors: true, toneMapped: false } );

		super( geometry, material );

		this.type = 'AxesHelper';

	}

	/**
	 * Defines the colors of the axes helper.
	 *
	 * @param {number|Color|string} xAxisColor - The color for the x axis.
	 * @param {number|Color|string} yAxisColor - The color for the y axis.
	 * @param {number|Color|string} zAxisColor - The color for the z axis.
	 * @return {AxesHelper} A reference to this axes helper.
	 */
	setColors( xAxisColor, yAxisColor, zAxisColor ) {

		const color = new Color();
		const array = this.geometry.attributes.color.array;

		color.set( xAxisColor );
		color.toArray( array, 0 );
		color.toArray( array, 3 );

		color.set( yAxisColor );
		color.toArray( array, 6 );
		color.toArray( array, 9 );

		color.set( zAxisColor );
		color.toArray( array, 12 );
		color.toArray( array, 15 );

		this.geometry.attributes.color.needsUpdate = true;

		return this;

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever this instance is no longer used in your app.
	 */
	dispose() {

		this.geometry.dispose();
		this.material.dispose();

	}

}

/**
 * This class is used to convert a series of paths to an array of
 * shapes. It is specifically used in context of fonts and SVG.
 */
class ShapePath {

	/**
	 * Constructs a new shape path.
	 */
	constructor() {

		this.type = 'ShapePath';

		/**
		 * The color of the shape.
		 *
		 * @type {Color}
		 */
		this.color = new Color();

		/**
		 * The paths that have been generated for this shape.
		 *
		 * @type {Array<Path>}
		 * @default null
		 */
		this.subPaths = [];

		/**
		 * The current path that is being generated.
		 *
		 * @type {?Path}
		 * @default null
		 */
		this.currentPath = null;

	}

	/**
	 * Creates a new path and moves it current point to the given one.
	 *
	 * @param {number} x - The x coordinate.
	 * @param {number} y - The y coordinate.
	 * @return {ShapePath} A reference to this shape path.
	 */
	moveTo( x, y ) {

		this.currentPath = new Path();
		this.subPaths.push( this.currentPath );
		this.currentPath.moveTo( x, y );

		return this;

	}

	/**
	 * Adds an instance of {@link LineCurve} to the path by connecting
	 * the current point with the given one.
	 *
	 * @param {number} x - The x coordinate of the end point.
	 * @param {number} y - The y coordinate of the end point.
	 * @return {ShapePath} A reference to this shape path.
	 */
	lineTo( x, y ) {

		this.currentPath.lineTo( x, y );

		return this;

	}

	/**
	 * Adds an instance of {@link QuadraticBezierCurve} to the path by connecting
	 * the current point with the given one.
	 *
	 * @param {number} aCPx - The x coordinate of the control point.
	 * @param {number} aCPy - The y coordinate of the control point.
	 * @param {number} aX - The x coordinate of the end point.
	 * @param {number} aY - The y coordinate of the end point.
	 * @return {ShapePath} A reference to this shape path.
	 */
	quadraticCurveTo( aCPx, aCPy, aX, aY ) {

		this.currentPath.quadraticCurveTo( aCPx, aCPy, aX, aY );

		return this;

	}

	/**
	 * Adds an instance of {@link CubicBezierCurve} to the path by connecting
	 * the current point with the given one.
	 *
	 * @param {number} aCP1x - The x coordinate of the first control point.
	 * @param {number} aCP1y - The y coordinate of the first control point.
	 * @param {number} aCP2x - The x coordinate of the second control point.
	 * @param {number} aCP2y - The y coordinate of the second control point.
	 * @param {number} aX - The x coordinate of the end point.
	 * @param {number} aY - The y coordinate of the end point.
	 * @return {ShapePath} A reference to this shape path.
	 */
	bezierCurveTo( aCP1x, aCP1y, aCP2x, aCP2y, aX, aY ) {

		this.currentPath.bezierCurveTo( aCP1x, aCP1y, aCP2x, aCP2y, aX, aY );

		return this;

	}

	/**
	 * Adds an instance of {@link SplineCurve} to the path by connecting
	 * the current point with the given list of points.
	 *
	 * @param {Array<Vector2>} pts - An array of points in 2D space.
	 * @return {ShapePath} A reference to this shape path.
	 */
	splineThru( pts ) {

		this.currentPath.splineThru( pts );

		return this;

	}

	/**
	 * Converts the paths into an array of shapes.
	 *
	 * @param {boolean} isCCW - By default solid shapes are  defined clockwise (CW) and holes are defined counterclockwise (CCW).
	 * If this flag is set to `true`, then those are flipped.
	 * @return {Array<Shape>} An array of shapes.
	 */
	toShapes( isCCW ) {

		function toShapesNoHoles( inSubpaths ) {

			const shapes = [];

			for ( let i = 0, l = inSubpaths.length; i < l; i ++ ) {

				const tmpPath = inSubpaths[ i ];

				const tmpShape = new Shape();
				tmpShape.curves = tmpPath.curves;

				shapes.push( tmpShape );

			}

			return shapes;

		}

		function isPointInsidePolygon( inPt, inPolygon ) {

			const polyLen = inPolygon.length;

			// inPt on polygon contour => immediate success    or
			// toggling of inside/outside at every single! intersection point of an edge
			//  with the horizontal line through inPt, left of inPt
			//  not counting lowerY endpoints of edges and whole edges on that line
			let inside = false;
			for ( let p = polyLen - 1, q = 0; q < polyLen; p = q ++ ) {

				let edgeLowPt = inPolygon[ p ];
				let edgeHighPt = inPolygon[ q ];

				let edgeDx = edgeHighPt.x - edgeLowPt.x;
				let edgeDy = edgeHighPt.y - edgeLowPt.y;

				if ( Math.abs( edgeDy ) > Number.EPSILON ) {

					// not parallel
					if ( edgeDy < 0 ) {

						edgeLowPt = inPolygon[ q ]; edgeDx = - edgeDx;
						edgeHighPt = inPolygon[ p ]; edgeDy = - edgeDy;

					}

					if ( ( inPt.y < edgeLowPt.y ) || ( inPt.y > edgeHighPt.y ) ) 		continue;

					if ( inPt.y === edgeLowPt.y ) {

						if ( inPt.x === edgeLowPt.x )		return	true;		// inPt is on contour ?
						// continue;				// no intersection or edgeLowPt => doesn't count !!!

					} else {

						const perpEdge = edgeDy * ( inPt.x - edgeLowPt.x ) - edgeDx * ( inPt.y - edgeLowPt.y );
						if ( perpEdge === 0 )				return	true;		// inPt is on contour ?
						if ( perpEdge < 0 ) 				continue;
						inside = ! inside;		// true intersection left of inPt

					}

				} else {

					// parallel or collinear
					if ( inPt.y !== edgeLowPt.y ) 		continue;			// parallel
					// edge lies on the same horizontal line as inPt
					if ( ( ( edgeHighPt.x <= inPt.x ) && ( inPt.x <= edgeLowPt.x ) ) ||
						 ( ( edgeLowPt.x <= inPt.x ) && ( inPt.x <= edgeHighPt.x ) ) )		return	true;	// inPt: Point on contour !
					// continue;

				}

			}

			return	inside;

		}

		const isClockWise = ShapeUtils.isClockWise;

		const subPaths = this.subPaths;
		if ( subPaths.length === 0 ) return [];

		let solid, tmpPath, tmpShape;
		const shapes = [];

		if ( subPaths.length === 1 ) {

			tmpPath = subPaths[ 0 ];
			tmpShape = new Shape();
			tmpShape.curves = tmpPath.curves;
			shapes.push( tmpShape );
			return shapes;

		}

		let holesFirst = ! isClockWise( subPaths[ 0 ].getPoints() );
		holesFirst = isCCW ? ! holesFirst : holesFirst;

		// console.log("Holes first", holesFirst);

		const betterShapeHoles = [];
		const newShapes = [];
		let newShapeHoles = [];
		let mainIdx = 0;
		let tmpPoints;

		newShapes[ mainIdx ] = undefined;
		newShapeHoles[ mainIdx ] = [];

		for ( let i = 0, l = subPaths.length; i < l; i ++ ) {

			tmpPath = subPaths[ i ];
			tmpPoints = tmpPath.getPoints();
			solid = isClockWise( tmpPoints );
			solid = isCCW ? ! solid : solid;

			if ( solid ) {

				if ( ( ! holesFirst ) && ( newShapes[ mainIdx ] ) )	mainIdx ++;

				newShapes[ mainIdx ] = { s: new Shape(), p: tmpPoints };
				newShapes[ mainIdx ].s.curves = tmpPath.curves;

				if ( holesFirst )	mainIdx ++;
				newShapeHoles[ mainIdx ] = [];

				//console.log('cw', i);

			} else {

				newShapeHoles[ mainIdx ].push( { h: tmpPath, p: tmpPoints[ 0 ] } );

				//console.log('ccw', i);

			}

		}

		// only Holes? -> probably all Shapes with wrong orientation
		if ( ! newShapes[ 0 ] )	return	toShapesNoHoles( subPaths );


		if ( newShapes.length > 1 ) {

			let ambiguous = false;
			let toChange = 0;

			for ( let sIdx = 0, sLen = newShapes.length; sIdx < sLen; sIdx ++ ) {

				betterShapeHoles[ sIdx ] = [];

			}

			for ( let sIdx = 0, sLen = newShapes.length; sIdx < sLen; sIdx ++ ) {

				const sho = newShapeHoles[ sIdx ];

				for ( let hIdx = 0; hIdx < sho.length; hIdx ++ ) {

					const ho = sho[ hIdx ];
					let hole_unassigned = true;

					for ( let s2Idx = 0; s2Idx < newShapes.length; s2Idx ++ ) {

						if ( isPointInsidePolygon( ho.p, newShapes[ s2Idx ].p ) ) {

							if ( sIdx !== s2Idx )	toChange ++;

							if ( hole_unassigned ) {

								hole_unassigned = false;
								betterShapeHoles[ s2Idx ].push( ho );

							} else {

								ambiguous = true;

							}

						}

					}

					if ( hole_unassigned ) {

						betterShapeHoles[ sIdx ].push( ho );

					}

				}

			}

			if ( toChange > 0 && ambiguous === false ) {

				newShapeHoles = betterShapeHoles;

			}

		}

		let tmpHoles;

		for ( let i = 0, il = newShapes.length; i < il; i ++ ) {

			tmpShape = newShapes[ i ].s;
			shapes.push( tmpShape );
			tmpHoles = newShapeHoles[ i ];

			for ( let j = 0, jl = tmpHoles.length; j < jl; j ++ ) {

				tmpShape.holes.push( tmpHoles[ j ].h );

			}

		}

		//console.log("shape", shapes);

		return shapes;

	}

}

/**
 * Abstract base class for controls.
 *
 * @abstract
 * @augments EventDispatcher
 */
class Controls extends EventDispatcher {

	/**
	 * Constructs a new controls instance.
	 *
	 * @param {Object3D} object - The object that is managed by the controls.
	 * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
	 */
	constructor( object, domElement = null ) {

		super();

		/**
		 * The object that is managed by the controls.
		 *
		 * @type {Object3D}
		 */
		this.object = object;

		/**
		 * The HTML element used for event listeners.
		 *
		 * @type {?HTMLDOMElement}
		 * @default null
		 */
		this.domElement = domElement;

		/**
		 * Whether the controls responds to user input or not.
		 *
		 * @type {boolean}
		 * @default true
		 */
		this.enabled = true;

		/**
		 * The internal state of the controls.
		 *
		 * @type {number}
		 * @default -1
		 */
		this.state = -1;

		/**
		 * This object defines the keyboard input of the controls.
		 *
		 * @type {Object}
		 */
		this.keys = {};

		/**
		 * This object defines what type of actions are assigned to the available mouse buttons.
		 * It depends on the control implementation what kind of mouse buttons and actions are supported.
		 *
		 * @type {{LEFT: ?number, MIDDLE: ?number, RIGHT: ?number}}
		 */
		this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null };

		/**
		 * This object defines what type of actions are assigned to what kind of touch interaction.
		 * It depends on the control implementation what kind of touch interaction and actions are supported.
		 *
		 * @type {{ONE: ?number, TWO: ?number}}
		 */
		this.touches = { ONE: null, TWO: null };

	}

	/**
	 * Connects the controls to the DOM. This method has so called "side effects" since
	 * it adds the module's event listeners to the DOM.
	 *
	 * @param {HTMLDOMElement} element - The DOM element to connect to.
	 */
	connect( element ) {

		if ( element === undefined ) {

			console.warn( 'THREE.Controls: connect() now requires an element.' ); // @deprecated, the warning can be removed with r185
			return;

		}

		if ( this.domElement !== null ) this.disconnect();

		this.domElement = element;

	}

	/**
	 * Disconnects the controls from the DOM.
	 */
	disconnect() {}

	/**
	 * Call this method if you no longer want use to the controls. It frees all internal
	 * resources and removes all event listeners.
	 */
	dispose() {}

	/**
	 * Controls should implement this method if they have to update their internal state
	 * per simulation step.
	 *
	 * @param {number} [delta] - The time delta in seconds.
	 */
	update( /* delta */ ) {}

}

/**
 * Scales the texture as large as possible within its surface without cropping
 * or stretching the texture. The method preserves the original aspect ratio of
 * the texture. Akin to CSS `object-fit: contain`
 *
 * @param {Texture} texture - The texture.
 * @param {number} aspect - The texture's aspect ratio.
 * @return {Texture} The updated texture.
 */
function contain( texture, aspect ) {

	const imageAspect = ( texture.image && texture.image.width ) ? texture.image.width / texture.image.height : 1;

	if ( imageAspect > aspect ) {

		texture.repeat.x = 1;
		texture.repeat.y = imageAspect / aspect;

		texture.offset.x = 0;
		texture.offset.y = ( 1 - texture.repeat.y ) / 2;

	} else {

		texture.repeat.x = aspect / imageAspect;
		texture.repeat.y = 1;

		texture.offset.x = ( 1 - texture.repeat.x ) / 2;
		texture.offset.y = 0;

	}

	return texture;

}

/**
 * Scales the texture to the smallest possible size to fill the surface, leaving
 * no empty space. The method preserves the original aspect ratio of the texture.
 * Akin to CSS `object-fit: cover`.
 *
 * @param {Texture} texture - The texture.
 * @param {number} aspect - The texture's aspect ratio.
 * @return {Texture} The updated texture.
 */
function cover( texture, aspect ) {

	const imageAspect = ( texture.image && texture.image.width ) ? texture.image.width / texture.image.height : 1;

	if ( imageAspect > aspect ) {

		texture.repeat.x = aspect / imageAspect;
		texture.repeat.y = 1;

		texture.offset.x = ( 1 - texture.repeat.x ) / 2;
		texture.offset.y = 0;

	} else {

		texture.repeat.x = 1;
		texture.repeat.y = imageAspect / aspect;

		texture.offset.x = 0;
		texture.offset.y = ( 1 - texture.repeat.y ) / 2;

	}

	return texture;

}

/**
 * Configures the texture to the default transformation. Akin to CSS `object-fit: fill`.
 *
 * @param {Texture} texture - The texture.
 * @return {Texture} The updated texture.
 */
function fill( texture ) {

	texture.repeat.x = 1;
	texture.repeat.y = 1;

	texture.offset.x = 0;
	texture.offset.y = 0;

	return texture;

}

/**
 * Determines how many bytes must be used to represent the texture.
 *
 * @param {number} width - The width of the texture.
 * @param {number} height - The height of the texture.
 * @param {number} format - The texture's format.
 * @param {number} type - The texture's type.
 * @return {number} The byte length.
 */
function getByteLength( width, height, format, type ) {

	const typeByteLength = getTextureTypeByteLength( type );

	switch ( format ) {

		// https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
		case AlphaFormat:
			return width * height;
		case RedFormat:
			return ( ( width * height ) / typeByteLength.components ) * typeByteLength.byteLength;
		case RedIntegerFormat:
			return ( ( width * height ) / typeByteLength.components ) * typeByteLength.byteLength;
		case RGFormat:
			return ( ( width * height * 2 ) / typeByteLength.components ) * typeByteLength.byteLength;
		case RGIntegerFormat:
			return ( ( width * height * 2 ) / typeByteLength.components ) * typeByteLength.byteLength;
		case RGBFormat:
			return ( ( width * height * 3 ) / typeByteLength.components ) * typeByteLength.byteLength;
		case RGBAFormat:
			return ( ( width * height * 4 ) / typeByteLength.components ) * typeByteLength.byteLength;
		case RGBAIntegerFormat:
			return ( ( width * height * 4 ) / typeByteLength.components ) * typeByteLength.byteLength;

		// https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
		case RGB_S3TC_DXT1_Format:
		case RGBA_S3TC_DXT1_Format:
			return Math.floor( ( width + 3 ) / 4 ) * Math.floor( ( height + 3 ) / 4 ) * 8;
		case RGBA_S3TC_DXT3_Format:
		case RGBA_S3TC_DXT5_Format:
			return Math.floor( ( width + 3 ) / 4 ) * Math.floor( ( height + 3 ) / 4 ) * 16;

		// https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
		case RGB_PVRTC_2BPPV1_Format:
		case RGBA_PVRTC_2BPPV1_Format:
			return ( Math.max( width, 16 ) * Math.max( height, 8 ) ) / 4;
		case RGB_PVRTC_4BPPV1_Format:
		case RGBA_PVRTC_4BPPV1_Format:
			return ( Math.max( width, 8 ) * Math.max( height, 8 ) ) / 2;

		// https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
		case RGB_ETC1_Format:
		case RGB_ETC2_Format:
			return Math.floor( ( width + 3 ) / 4 ) * Math.floor( ( height + 3 ) / 4 ) * 8;
		case RGBA_ETC2_EAC_Format:
			return Math.floor( ( width + 3 ) / 4 ) * Math.floor( ( height + 3 ) / 4 ) * 16;

		// https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
		case RGBA_ASTC_4x4_Format:
			return Math.floor( ( width + 3 ) / 4 ) * Math.floor( ( height + 3 ) / 4 ) * 16;
		case RGBA_ASTC_5x4_Format:
			return Math.floor( ( width + 4 ) / 5 ) * Math.floor( ( height + 3 ) / 4 ) * 16;
		case RGBA_ASTC_5x5_Format:
			return Math.floor( ( width + 4 ) / 5 ) * Math.floor( ( height + 4 ) / 5 ) * 16;
		case RGBA_ASTC_6x5_Format:
			return Math.floor( ( width + 5 ) / 6 ) * Math.floor( ( height + 4 ) / 5 ) * 16;
		case RGBA_ASTC_6x6_Format:
			return Math.floor( ( width + 5 ) / 6 ) * Math.floor( ( height + 5 ) / 6 ) * 16;
		case RGBA_ASTC_8x5_Format:
			return Math.floor( ( width + 7 ) / 8 ) * Math.floor( ( height + 4 ) / 5 ) * 16;
		case RGBA_ASTC_8x6_Format:
			return Math.floor( ( width + 7 ) / 8 ) * Math.floor( ( height + 5 ) / 6 ) * 16;
		case RGBA_ASTC_8x8_Format:
			return Math.floor( ( width + 7 ) / 8 ) * Math.floor( ( height + 7 ) / 8 ) * 16;
		case RGBA_ASTC_10x5_Format:
			return Math.floor( ( width + 9 ) / 10 ) * Math.floor( ( height + 4 ) / 5 ) * 16;
		case RGBA_ASTC_10x6_Format:
			return Math.floor( ( width + 9 ) / 10 ) * Math.floor( ( height + 5 ) / 6 ) * 16;
		case RGBA_ASTC_10x8_Format:
			return Math.floor( ( width + 9 ) / 10 ) * Math.floor( ( height + 7 ) / 8 ) * 16;
		case RGBA_ASTC_10x10_Format:
			return Math.floor( ( width + 9 ) / 10 ) * Math.floor( ( height + 9 ) / 10 ) * 16;
		case RGBA_ASTC_12x10_Format:
			return Math.floor( ( width + 11 ) / 12 ) * Math.floor( ( height + 9 ) / 10 ) * 16;
		case RGBA_ASTC_12x12_Format:
			return Math.floor( ( width + 11 ) / 12 ) * Math.floor( ( height + 11 ) / 12 ) * 16;

		// https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
		case RGBA_BPTC_Format:
		case RGB_BPTC_SIGNED_Format:
		case RGB_BPTC_UNSIGNED_Format:
			return Math.ceil( width / 4 ) * Math.ceil( height / 4 ) * 16;

		// https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
		case RED_RGTC1_Format:
		case SIGNED_RED_RGTC1_Format:
			return Math.ceil( width / 4 ) * Math.ceil( height / 4 ) * 8;
		case RED_GREEN_RGTC2_Format:
		case SIGNED_RED_GREEN_RGTC2_Format:
			return Math.ceil( width / 4 ) * Math.ceil( height / 4 ) * 16;

	}

	throw new Error(
		`Unable to determine texture byte length for ${format} format.`,
	);

}

function getTextureTypeByteLength( type ) {

	switch ( type ) {

		case UnsignedByteType:
		case ByteType:
			return { byteLength: 1, components: 1 };
		case UnsignedShortType:
		case ShortType:
		case HalfFloatType:
			return { byteLength: 2, components: 1 };
		case UnsignedShort4444Type:
		case UnsignedShort5551Type:
			return { byteLength: 2, components: 4 };
		case UnsignedIntType:
		case IntType:
		case FloatType:
			return { byteLength: 4, components: 1 };
		case UnsignedInt5999Type:
		case UnsignedInt101111Type:
			return { byteLength: 4, components: 3 };

	}

	throw new Error( `Unknown texture type ${type}.` );

}

/**
 * A class containing utility functions for textures.
 *
 * @hideconstructor
 */
class TextureUtils {

	/**
	 * Scales the texture as large as possible within its surface without cropping
	 * or stretching the texture. The method preserves the original aspect ratio of
	 * the texture. Akin to CSS `object-fit: contain`
	 *
	 * @param {Texture} texture - The texture.
	 * @param {number} aspect - The texture's aspect ratio.
	 * @return {Texture} The updated texture.
	 */
	static contain( texture, aspect ) {

		return contain( texture, aspect );

	}

	/**
	 * Scales the texture to the smallest possible size to fill the surface, leaving
	 * no empty space. The method preserves the original aspect ratio of the texture.
	 * Akin to CSS `object-fit: cover`.
	 *
	 * @param {Texture} texture - The texture.
	 * @param {number} aspect - The texture's aspect ratio.
	 * @return {Texture} The updated texture.
	 */
	static cover( texture, aspect ) {

		return cover( texture, aspect );

	}

	/**
	 * Configures the texture to the default transformation. Akin to CSS `object-fit: fill`.
	 *
	 * @param {Texture} texture - The texture.
	 * @return {Texture} The updated texture.
	 */
	static fill( texture ) {

		return fill( texture );

	}

	/**
	 * Determines how many bytes must be used to represent the texture.
	 *
	 * @param {number} width - The width of the texture.
	 * @param {number} height - The height of the texture.
	 * @param {number} format - The texture's format.
	 * @param {number} type - The texture's type.
	 * @return {number} The byte length.
	 */
	static getByteLength( width, height, format, type ) {

		return getByteLength( width, height, format, type );

	}

}

if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
		revision: REVISION,
	} } ) );

}

if ( typeof window !== 'undefined' ) {

	if ( window.__THREE__ ) {

		console.warn( 'WARNING: Multiple instances of Three.js being imported.' );

	} else {

		window.__THREE__ = REVISION;

	}

}

export { ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AgXToneMapping, AlphaFormat, AlwaysCompare, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AnimationAction, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, AttachedBindMode, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, BackSide, BasicDepthPacking, BasicShadowMap, BatchedMesh, Bone, BooleanKeyframeTrack, Box2, Box3, Box3Helper, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasTexture, CapsuleGeometry, CatmullRomCurve3, CineonToneMapping, CircleGeometry, ClampToEdgeWrapping, Clock, Color, ColorKeyframeTrack, ColorManagement, CompressedArrayTexture, CompressedCubeTexture, CompressedTexture, CompressedTextureLoader, ConeGeometry, ConstantAlphaFactor, ConstantColorFactor, Controls, CubeCamera, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CustomToneMapping, CylinderGeometry, Cylindrical, Data3DTexture, DataArrayTexture, DataTexture, DataTextureLoader, DataUtils, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DetachedBindMode, DirectionalLight, DirectionalLightHelper, DiscreteInterpolant, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EllipseCurve, EqualCompare, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExternalTexture, ExtrudeGeometry, FileLoader, Float16BufferAttribute, Float32BufferAttribute, FloatType, Fog, FogExp2, FramebufferTexture, FrontSide, Frustum, FrustumArray, GLBufferAttribute, GLSL1, GLSL3, GreaterCompare, GreaterDepth, GreaterEqualCompare, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16BufferAttribute, Int32BufferAttribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InterpolationSamplingMode, InterpolationSamplingType, InvertStencilOp, KeepStencilOp, KeyframeTrack, LOD, LatheGeometry, Layers, LessCompare, LessDepth, LessEqualCompare, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LineSegments, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearSRGBColorSpace, LinearToneMapping, LinearTransfer, Loader, LoaderUtils, LoadingManager, LoopOnce, LoopPingPong, LoopRepeat, MOUSE, Material, MaterialLoader, MathUtils, Matrix2, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeutralToneMapping, NeverCompare, NeverDepth, NeverStencilFunc, NoBlending, NoColorSpace, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualCompare, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronGeometry, OneFactor, OneMinusConstantAlphaFactor, OneMinusConstantColorFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, Path, PerspectiveCamera, Plane, PlaneGeometry, PlaneHelper, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, RAD2DEG, RED_GREEN_RGTC2_Format, RED_RGTC1_Format, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDepthPacking, RGBFormat, RGBIntegerFormat, RGB_BPTC_SIGNED_Format, RGB_BPTC_UNSIGNED_Format, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGDepthPacking, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RenderTarget, RenderTarget3D, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingGeometry, SIGNED_RED_GREEN_RGTC2_Format, SIGNED_RED_RGTC1_Format, SRGBColorSpace, SRGBTransfer, Scene, ShaderMaterial, ShadowMaterial, Shape, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, Source, Sphere, SphereGeometry, Spherical, SphericalHarmonics3, SplineCurve, SpotLight, SpotLightHelper, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronGeometry, Texture, TextureLoader, TextureUtils, Timer, TimestampQuery, TorusGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeGeometry, UVMapping, Uint16BufferAttribute, Uint32BufferAttribute, Uint8BufferAttribute, Uint8ClampedBufferAttribute, Uniform, UniformsGroup, UniformsUtils, UnsignedByteType, UnsignedInt101111Type, UnsignedInt248Type, UnsignedInt5999Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, VideoFrameTexture, VideoTexture, WebGL3DRenderTarget, WebGLArrayRenderTarget, WebGLCoordinateSystem, WebGLCubeRenderTarget, WebGLRenderTarget, WebGPUCoordinateSystem, WebXRController, WireframeGeometry, WrapAroundEnding, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, arrayNeedsUint32, cloneUniforms, createCanvasElement, createElementNS, getByteLength, getUnlitUniformColorSpace, mergeUniforms, probeAsync, warnOnce };
