import 'react-native-reanimated'
import 'react-native-gesture-handler'

import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { AppStack } from "@navigation";
import { AppContextProvider } from "@context";
import { Colors } from "@theme";
import { useAppFonts, useQueryRefetchOnAppFocus } from "@hooks";
import { persistor, store } from "@redux";
import { PersistGate } from "redux-persist/integration/react";
import "@api/query/queryOnlineManager";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { toastConfig } from "@utils/toast";
import { preventAutoHideAsync } from "expo-splash-screen";

// to disable font scaling when system font size changes
(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.allowFontScaling = false;
(TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
(TextInput as any).defaultProps.allowFontScaling = false;

const queryClient = new QueryClient();

preventAutoHideAsync();

export default function App() {
  useQueryRefetchOnAppFocus();
  const { isFontLoadSuccess } = useAppFonts();

  if (!isFontLoadSuccess) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <KeyboardProvider statusBarTranslucent>
            <SafeAreaProvider style={{ backgroundColor: Colors.darkPrimary }}>
              <GestureHandlerRootView style={styles.gestureRoot}>
                <StatusBar style="inverted" />
                <QueryClientProvider client={queryClient}>
                  <NavigationContainer>
                    <AppContextProvider>
                      <AppStack />
                    </AppContextProvider>
                  </NavigationContainer>
                </QueryClientProvider>
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </KeyboardProvider>
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
});
