import React, {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useRef,
} from "react";
import { StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface IBookServiceContextValue {
  bookServiceSheetRef: MutableRefObject<BottomSheetMethods>;
  selectStaffSheetRef: MutableRefObject<BottomSheetMethods>;
  handleOnPressBookService: () => void;
  handleOpenSelectStaff: () => void;
}

export const BookServiceContext = createContext({} as IBookServiceContextValue);

const ClientBookServiceContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const bookServiceSheetRef = useRef<BottomSheet>(null);
  const selectStaffSheetRef = useRef<BottomSheet>(null);

  const handleOnPressBookService = () => {
    bookServiceSheetRef.current?.snapToIndex(0);
  };

  const handleOpenSelectStaff = () => {
    bookServiceSheetRef.current?.close();
    selectStaffSheetRef.current?.snapToIndex(0);
  };

  const value: IBookServiceContextValue = {
    bookServiceSheetRef,
    selectStaffSheetRef,
    handleOnPressBookService,
    handleOpenSelectStaff,
  };

  return (
    <BookServiceContext.Provider value={value}>
      {children}
    </BookServiceContext.Provider>
  );
};

export default ClientBookServiceContextProvider;

const styles = StyleSheet.create({});
