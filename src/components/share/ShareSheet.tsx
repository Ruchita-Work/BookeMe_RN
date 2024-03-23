import React, { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { hp } from "@utils/responsive";
import AppSheet from "@components/ui/AppSheet";
import Separator from "@components/ui/Separator";
import ShareSheetSocials from "@components/share/ShareSheetSocials";
import ShareSheetUsers from "@components/share/ShareSheetUsers";
import ShareSheetOthers from "@components/share/ShareSheetOthers";
import { useHideTabsForSheet } from "@hooks";
import shareSheetStyles from "@components/share/shareSheetStyles";
import { Colors } from "@theme";

const shareUsersData: Array<string | number> = [1];

const ShareSheet = forwardRef<BottomSheet, any>((props, ref) => {
  const { onAnimateSheet } = useHideTabsForSheet();
  const snapPoints = useMemo(() => [hp(72)], []);

  return (
    <AppSheet onAnimate={onAnimateSheet} ref={ref} snapPoints={snapPoints}>
      <View style={shareSheetStyles.container}>
        <Text style={shareSheetStyles.title}>Send to</Text>
        <Separator color={Colors.dark3} />
        <ShareSheetUsers data={shareUsersData.concat(["search"])} />
        <Separator color={Colors.dark3} />
        <ShareSheetSocials />
        <Separator color={Colors.dark3} />
        <ShareSheetOthers />
      </View>
    </AppSheet>
  );
});

export default ShareSheet;
