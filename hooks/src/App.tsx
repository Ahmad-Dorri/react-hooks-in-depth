import StateComponentForm from './components/state-component-form';
import UseEffectComponent from './components/use-effect-component';
import UseRefComponent from './components/use-ref-component';

function App() {
  return (
    <>
      <h1>Use State: </h1>
      <StateComponentForm />
      <h1>Use Effect: </h1>
      <UseEffectComponent />
      <h1>Use Ref: </h1>
      <UseRefComponent />
    </>
  );
}

export default App;
