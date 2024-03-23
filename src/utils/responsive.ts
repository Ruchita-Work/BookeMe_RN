import { Dimensions, PixelRatio, Platform } from "react-native";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

export const isiPAD = viewportHeight / viewportWidth < 1.6;
export const isTablet = viewportHeight / viewportWidth < 1.6;

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export function wp(percentage: number) {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof percentage === "number" ? percentage : parseFloat(percentage);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return +PixelRatio.roundToNearestPixel(
    (viewportWidth * elemWidth) / 100,
  ).toFixed(2);
}

export function hp(percentage: number) {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof percentage === "number" ? percentage : parseFloat(percentage);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return +PixelRatio.roundToNearestPixel(
    (viewportHeight * elemHeight) / 100,
  ).toFixed(2);
}

const scale = viewportWidth / 430;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  } else {
    if (isTablet) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  }
}
