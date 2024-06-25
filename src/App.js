import Button from "./components/common/ButtonBase";

function App() {
  return (
    <div>
      <Button label="기본버튼" variant="primary" size="xl"></Button>
      <Button label="에러버튼" variant="error"></Button>
      <Button label="비활성화버튼" variant="warning" disabled="disabled"></Button>
    </div>
  );
}

export default App;
