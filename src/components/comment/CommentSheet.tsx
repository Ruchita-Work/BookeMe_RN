import React, { forwardRef, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppSheet from "@components/ui/AppSheet";
import Separator from "@components/ui/Separator";
import CommentItem from "@components/comment/CommentItem";
import CommentInput from "@components/comment/CommentInput";
import { hp, wp } from "@utils/responsive";
import { Colors, FontSizes, FontFamily } from "@theme";
import { useHideTabsForSheet } from "@hooks";

const commentsDummyData = [1, 2, 3, 4, 5, 6];

const CommentSheet = forwardRef<BottomSheet, any>((props, ref) => {
  const { top } = useSafeAreaInsets();
  const { onAnimateSheet } = useHideTabsForSheet();
  const snapPoints = useMemo(() => [hp(70)], []);

  return (
    <AppSheet
      onAnimate={onAnimateSheet}
      ref={ref}
      snapPoints={snapPoints}
      topInset={top}>
      <View style={styles.container}>
        <Text style={styles.title}>24.8K Comments</Text>
        <Separator color={Colors.dark3} />
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          data={commentsDummyData}
          renderItem={() => <CommentItem />}
          contentContainerStyle={styles.listContent}
        />
        <CommentInput
          onBlur={() => onAnimateSheet(-1, 0)}
          containerStyle={styles.commentInput}
        />
      </View>
    </AppSheet>
  );
});

export default CommentSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark2,
  },
  title: {
    color: Colors.white,
    fontSize: FontSizes.size24,
    alignSelf: "center",
    marginVertical: hp(1),
    paddingHorizontal: wp(5),
    fontFamily: FontFamily.Urbanist.Bold,
  },
  listContent: {
    rowGap: hp(3),
    paddingTop: hp(2),
    paddingHorizontal: wp(5),
  },
  commentInput: {
    paddingTop: hp(2),
    paddingHorizontal: wp(5),
  },
});
