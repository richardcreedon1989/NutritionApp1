import React, { useState } from "react";
import { Button, Form } from "reactstrap";
import { toast } from "react-toastify";
import MacroSelectorInput from "./MacroSelectorInput";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const MacroSelector = (props) => {
  const [macro, setMacro] = useState({ protein: 0, carbs: 0, fat: 0 });

  const nutritionHandler = (e, id) => {
    setMacro({ ...macro, [id]: [e] });
    console.log(macro);
  }; //sets % user wants for each of the macros

  console.log("macroProps", props);

  const macrosHandler = (e) => {
    e.preventDefault();
    const { protein, fat, carbs } = macro;
    fat && protein && carbs && props.macrosHandler({ protein, carbs, fat });
    parseInt(carbs) + parseInt(protein) + parseInt(fat) !== 100 &&
      toast.error("Must add up to 100%");
  }; //passes macros up to App component to allow for calculation for calories total/remaining etc

  return (
    //center the inputs as otherwise weird looking on wider screen
    <Form className="padding-bottom">
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="protein">{`Protein ${macro.protein}%:`}</label>
          <MacroSelectorInput
            id="protein"
            nutritionHandler={nutritionHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="carbs">{`Carbs ${macro.carbs}%:`}</label>
          <MacroSelectorInput nutritionHandler={nutritionHandler} id="carbs" />
        </div>
        <div className="form-group" style={{ display: "inlineBlock" }}>
          <label htmlFor="fat">{`Fat ${macro.fat}%:`}</label>
          <MacroSelectorInput nutritionHandler={nutritionHandler} id="fat" />
        </div>
      </div>
      <div className="calculate-button">
        <Button type="submit" onClick={(e) => macrosHandler(e)}>
          Calculate
        </Button>
      </div>
    </Form>
  ); // Button above - Enter on fat input clicks calculate button when pass in event + stop refresh + type is submit
};

export default MacroSelector;
