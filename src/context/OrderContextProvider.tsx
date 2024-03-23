import React, {
  FC,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useRef,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface IOrderContextValue {
  rescheduleSheetRef: MutableRefObject<BottomSheetMethods>;
  openReAssignSheet: () => void;
}

export const OrderContext = createContext<Partial<IOrderContextValue>>({});

const OrderContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const rescheduleSheetRef = useRef<BottomSheet>(null);

  const openReAssignSheet = () => {
    rescheduleSheetRef.current?.snapToIndex(0);
  };

  return (
    <OrderContext.Provider value={{ rescheduleSheetRef, openReAssignSheet }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
