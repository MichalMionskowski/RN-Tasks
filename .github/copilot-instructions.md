# React Native Task App - Development Guidelines

## Project Overview

This is a React Native task management application built with Expo. The app allows users to create, organize, and manage tasks with descriptions and color coding.

## Technology Stack

### Core Framework

- **React Native** (v0.81.5) with **Expo** (v54.x)
- **TypeScript** for type safety
- **Expo SDK 54** with New Architecture enabled

### Navigation

- **React Navigation v7** with Native Stack Navigator
- Entry point: `App.tsx` (not using Expo Router)
- Standard React Navigation patterns with typed navigation props

### State Management

- **Zustand v5** for global state management
- **MMKV** (react-native-mmkv v4.1.2) for persistent storage
  - Fast, encrypted native storage
  - Integrated with Zustand persistence middleware
  - Storage configuration in `app/storage.tsx`

### UI & Interactions

- **expo-checkbox** for task completion toggles
- **@expo/vector-icons** (Ionicons) for icons
- **react-native-gesture-handler** for gestures
- **react-native-reanimated** for animations
- Native Pressable components with press feedback

### Project Structure

```
app/
  ├── components/      # Reusable UI components
  │   ├── Task.tsx
  │   ├── TaskList.tsx
  │   ├── TaskDetail.tsx
  │   ├── InputBox.tsx
  │   └── ColorPicker.tsx
  ├── HomeScreen.tsx   # Main screen
  ├── store.ts         # Zustand store
  └── storage.tsx      # MMKV storage adapter
App.tsx                # Root with NavigationContainer
```

## Coding Standards & Best Practices

### React Native Standards

1. **Functional Components**: Use functional components with hooks exclusively
2. **Hook Rules**:
   - Always call hooks at the top level of components
   - Never call hooks conditionally, in loops, or nested functions
   - Use `useRef` for accessing native methods from View components
3. **Styling**:
   - Use StyleSheet.create() for all styles
   - Avoid inline styles except for dynamic values
   - Use array syntax for combining styles: `style={[styles.base, condition && styles.variant]}`
4. **TypeScript**:
   - Define interfaces for all component props
   - Type all function parameters and return values
   - Use type inference where appropriate
5. **Performance**:
   - Memoize selectors in Zustand to avoid re-renders
   - Use shallow equality checks for state subscriptions
   - Optimize FlatList with keyExtractor and proper renderItem

### Zustand Best Practices

```typescript
// ✅ Good: Direct selector, stable reference
const addTask = useTaskStore((state) => state.addTask);

// ❌ Bad: Creates new function each render
const addTask = useTaskStore((state) => {
  return state.addTask;
});
```

### Navigation Patterns

- Type navigation props with `NativeStackScreenProps`
- Pass parameters with typed param lists
- Use navigation.navigate() for screen transitions

### MMKV Storage

- MMKV requires native builds (won't work in Expo Go)
- Use `npx expo run:ios` or `npx expo run:android`
- Encryption key configured in storage setup

## Learning-Focused Development Approach

### When Making Code Changes

**Always provide:**

1. **Clear explanation** of what changed and why
2. **Reasoning** behind the technical decision
3. **Best practices** context for the approach used
4. **Common pitfalls** to avoid
5. **Alternative approaches** when relevant

### When Providing Solutions

**Include:**

- Line-by-line breakdown for complex changes
- Links to official documentation when applicable
- Real-world use cases and examples
- Performance implications
- Type safety considerations

### Example Response Format

```
Fixed! The problem was [specific issue].

**What was wrong:**
- [Technical explanation of the error]

**What's correct:**
- [Explanation of the solution]
- [Why this approach is better]

**Key concepts:**
- [Related React Native/Zustand/TypeScript concept]
- [Best practice to remember]

**Resources:**
- [React Native/Expo/Zustand documentation link if relevant]
```

## Common Patterns in This Project

### Adding a New Task

```typescript
const addTask = useTaskStore((state) => state.insertTask);
addTask({ title: "Task name" }); // ID and completed status auto-generated
```

### Persisted State

All Zustand state is automatically persisted to MMKV storage and survives app restarts.

### Component Composition

Components receive store functions as props when used in third-party libraries (like DraggableFlatList) to avoid "Invalid Hook Call" errors.

### Styling Philosophy

- Card-based design with shadows
- 12px border radius for rounded corners
- #F5F5F7 background color
- #007AFF for primary actions (iOS blue)
- Consistent 16px padding

## Development Commands

```bash
npx expo start          # Start Metro bundler
npx expo start --clear  # Clear cache and start
npx expo run:ios        # Build and run on iOS
npx expo run:android    # Build and run on Android
```

## Notes for AI Assistant

- **Always explain** the reasoning behind code changes
- **Provide context** about React Native/Zustand patterns
- **Suggest improvements** with explanations
- **Flag potential issues** before they become problems
- **Offer learning resources** when introducing new concepts
- This is a **learning project** - depth of explanation is valued over brevity
- When suggesting multiple approaches, explain pros/cons of each
