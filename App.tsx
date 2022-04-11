import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import SideEffects2 from "./Exercicios/sideEffects2";
import ReusableExercise from "./Exercicios/reusableComponent";
import NetWorking from "./Exercicios/networking";
import LifeCycle from "./Exercicios/lifeCycle";
import ValidateWithProptype from "./Exercicios/validateWithProptype";
import Interpolate from "./Exercicios/interpolateJSX";
import EventHandlers from "./Exercicios/eventHandlers";
import ErrorBoundary from "./Exercicios/errorBoundary";
import { FunctionalComponent } from "./Exercicios/classVsFunctionalComponent";
import FlatListBasics from "./Exercicios/handlingLists";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
          <ErrorBoundary />
          <StatusBar style="auto" />
          <SideEffects2 />
          <FunctionalComponent />
          <EventHandlers />
          <Interpolate />
          <ValidateWithProptype />
          <ReusableExercise />
          <NetWorking />
          <LifeCycle />
          <FlatListBasics />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
         flex: 1,
        width: '100%',
    }
});
