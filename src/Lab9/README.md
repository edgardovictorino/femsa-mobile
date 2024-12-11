# Travel Booking App
## App Summary and Features

**Travel Booking App** is an application designed for users to explore tourist destinations, book trips, and manage their profile and settings. Key features include:

- **Destination Listing:** Allows users to explore available destinations.
- **Destination Details:** Detailed information about each destination, including images, descriptions, and prices.
- **Authentication Flow:** Login and registration to access personalized features.
- **Search:** Advanced filtering and search for destinations.
- **Notifications:** Section to display alerts, offers, and reminders.
- **Profile and Settings:** Users can modify their personal information and preferences.

## Navigation Structure

The navigation utilizes React Navigation with multiple levels of nesting:

- **Root Navigator (Stack):**  
  Determines whether the user sees the authentication flow or the main content based on their authentication status.
  
  - **Auth Navigator (Stack):**
    - **Login**
    - **Register**
  
  - **App Navigator (Drawer):**
    - **HomeTabs (Bottom Tabs):**
      - **FeedStack (Stack):**
        - Home (main destinations)
        - Details (destination details)
      - **SearchStack (Stack):**
        - Search (destination search)
        - Details (destination details from search results)
      - **Notifications (Screen)**
    - **Profile (Screen)**
    - **Settings (Screen)**

The hierarchy is:
`RootStack`  
└── if not authenticated → `AuthStack` (Login/Register)  
└── if authenticated → `AppDrawer` (includes `HomeTabs`, `Profile`, `Settings`)

In `HomeTabs`: `FeedStack` & `SearchStack` nest their own screens.

## Customizations in Navigation Components

- **Custom Headers:** Titles with unique styles, potentially including icons or action buttons.
- **Icons in Bottom Tabs:** With `react-native-vector-icons`, clear and attractive icons were added for each tab, with color changes in active/inactive state.
- **Deep Linking:** Configuration for the app to respond to external links (e.g., `travelbookingapp://register`).
- **Custom Animations:** Adjustment of transitions between screens using Stack Navigator options.

## Performance Optimization

- **Lazy Loading of Screens:** Deferred loading of screens to improve startup time.
- **Memoization:** Use of `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary renders.
- **Code Splitting:** Splitting of code to only load necessary parts on startup.
- **Resource Optimization:** Use of lightweight images and caching strategies.

## State Management Approach

- **Context API:**
  - **AuthContext:** Maintains the `isAuthenticated` state and `login()` and `logout()` functions.
  
This approach avoids the need for additional libraries and keeps state control simple and centralized.

## Challenges and How They Were Addressed

- **Deep Linking on iOS/Android:**  
  Initially, the deep link did not lead to the correct screen. It was resolved by ensuring the initial URL is loaded before mounting the `NavigationContainer` and adjusting the `linking.config` settings.

- **Complex Nested Navigation:**  
  Designing the structure with multiple levels required careful consideration. Navigators were separated into different files, and the `linking.config` was carefully defined to maintain clarity.

- **Performance:**  
  The initial loading was somewhat slow, so lazy loading, memoization, and code splitting were applied.

## Instructions to Run the App

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/TravelBookingApp.git
   cd TravelBookingApp
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```
   or

   ```bash
   yarn install
   ```

3. **Install Pods (iOS)**

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Run the App**

   - iOS (simulator)

   ```bash
   npx react-native run-ios
   ```

   - Android (emulator/device)

   ```bash
   npx react-native run-android
   ```

5. Test Deep Linking

   - iOS

   ```bash
   xcrun simctl openurl booted travelbookingapp://register
   ```

   - Android

   ```bash
   adb shell am start -W -a android.intent.action.VIEW -d "travelbookingapp://register" com.your.package
   ```

This will open the app directly on the Register screen, assuming the linking configuration and authentication state are correctly set.