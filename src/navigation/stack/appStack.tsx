import React, { useContext } from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {
  Signin,
  Usertype,
  ClientOnboarding,
  ProProfile,
  Categories,
  ExploreSearch,
  ProOrderDetail,
  ProAddService,
  ProAddServicePostDetails,
  ProEditProfile,
  ClientInterestAreas,
  OnboardingProType,
  AreaOfBusiness,
  CreateBusiness,
  AddBusinessTeams,
  InviteTeamMembers,
  BusinessPaywall,
  CreateIndieProBusiness,
  IndieProCompanyDetails,
  EmployeeCompanyDetails,
  EmployeeVerifyingStatus,
  ProPaymentMethods,
  ProAdvancedSettings,
  ClientBookingAddService,
  ClientBookingShopping,
  ClientBookingConfirmation,
  FindSalon,
  InvitedMember,
  IdVerification,
  UploadSelfie,
  UploadCertificate,
  Messages,
  Chat,
  AudioCall,
  VideoCall,
  Notification,
  ClientSettings,
  ClientSettingsProfile,
  AddPaymentMethod,
} from "@screens";
import { IMainStackScreenParams } from "@navigation/types";
import ClientHomeTabs from "@navigation/tab/clientHomeTabs";
import ProHomeTabs from "@navigation/tab/proHomeTabs";
import ProDashboard from "@screens/pro/proDashboard";
import {
  AddServiceContextProvider,
  OrderContextProvider,
  AppContext,
  ClientBookServiceContextProvider,
} from "@context";
import ClientPaymentMethods from "@screens/client/settings/ClientPaymentMethods";
import AddService from "@screens/pro/businessStore/AddService";
import StoreWelcome from "@screens/pro/businessStore/StoreWelcome";
import Collection from "@screens/pro/businessStore/Collection";
import CategoriesStore from "@screens/pro/businessStore/CategoriesStore";
import SubCategories from "@screens/pro/businessStore/SubCategories";
import ProductList from "@screens/pro/businessStore/ProductList";
import Filters from "@screens/pro/businessStore/Filters";

const Stack = createNativeStackNavigator<IMainStackScreenParams>();

const stackOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AppStack = () => {
  const { initialRouteName } = useContext(AppContext);

  return (
    <OrderContextProvider>
      <AddServiceContextProvider>
        <ClientBookServiceContextProvider>
          <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={stackOptions}>
            <Stack.Screen name="SignIn" component={Signin} />
            <Stack.Screen name="Usertype" component={Usertype} />
            <Stack.Screen
              name="ClientOnboarding"
              component={ClientOnboarding}
            />
            <Stack.Screen name="ProHomeTabs" component={ProHomeTabs} />
            <Stack.Screen name="ClientHomeTabs" component={ClientHomeTabs} />
            <Stack.Screen name="ProProfile" component={ProProfile} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="ExploreSearch" component={ExploreSearch} />
            <Stack.Screen name="ProDashboard" component={ProDashboard} />
            <Stack.Screen name="OrderDetail" component={ProOrderDetail} />
            <Stack.Screen name="ProAddService" component={ProAddService} />
            <Stack.Screen name="AddService" component={AddService} />
            <Stack.Screen name="StoreWelcome" component={StoreWelcome} />
            <Stack.Screen name="Collection" component={Collection} />
            <Stack.Screen name="CategoriesStore" component={CategoriesStore} />
            <Stack.Screen name="SubCategories" component={SubCategories} />
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="Filters" component={Filters} />
            <Stack.Screen
              name="ProAddServicePostDetails"
              component={ProAddServicePostDetails}
            />
            <Stack.Screen name="ProEditProfile" component={ProEditProfile} />
            <Stack.Screen
              name="ClientInterestAreas"
              component={ClientInterestAreas}
            />
            <Stack.Screen
              name="OnboardingProType"
              component={OnboardingProType}
            />

            <Stack.Screen name="AreaOfBusiness" component={AreaOfBusiness} />
            <Stack.Screen name="CreateBusiness" component={CreateBusiness} />
            <Stack.Screen
              name="AddBusinessTeams"
              component={AddBusinessTeams}
            />
            <Stack.Screen
              name="InviteTeamMembers"
              component={InviteTeamMembers}
            />
            <Stack.Screen name="BusinessPaywall" component={BusinessPaywall} />
            <Stack.Screen
              name="CreateIndieProBusiness"
              component={CreateIndieProBusiness}
            />
            <Stack.Screen
              name="IndieProCompanyDetails"
              component={IndieProCompanyDetails}
            />
            <Stack.Screen
              name="EmployeeCompanyDetails"
              component={EmployeeCompanyDetails}
            />
            <Stack.Screen
              name="EmployeeVerifyingStatus"
              component={EmployeeVerifyingStatus}
            />
            <Stack.Screen name="IdVerification" component={IdVerification} />
            <Stack.Screen name="UploadSelfie" component={UploadSelfie} />
            <Stack.Screen
              name="UploadCertificate"
              component={UploadCertificate}
            />
            <Stack.Screen
              name="ProPaymentMethods"
              component={ProPaymentMethods}
            />
            <Stack.Screen
              name="ProAdvancedSettings"
              component={ProAdvancedSettings}
            />
            <Stack.Screen
              name="ClientBookingAddService"
              component={ClientBookingAddService}
            />
            <Stack.Screen
              name="ClientBookingShopping"
              component={ClientBookingShopping}
            />
            <Stack.Screen
              name="ClientBookingConfirmation"
              component={ClientBookingConfirmation}
            />
            <Stack.Screen name="FindSalon" component={FindSalon} />
            <Stack.Screen name="InvitedMember" component={InvitedMember} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen
              name="AudioCall"
              component={AudioCall}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name="VideoCall"
              component={VideoCall}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="ClientSettings" component={ClientSettings} />
            <Stack.Screen
              name="ClientSettingsProfile"
              component={ClientSettingsProfile}
            />
            <Stack.Screen
              name="ClientPaymentMethods"
              component={ClientPaymentMethods}
            />
            <Stack.Screen
              name="AddPaymentMethod"
              component={AddPaymentMethod}
            />
          </Stack.Navigator>
        </ClientBookServiceContextProvider>
      </AddServiceContextProvider>
    </OrderContextProvider>
  );
};

export default AppStack;
