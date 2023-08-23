import { useRef, useState } from "react";
import colors from "../../assets/styles/colors";
import "./Home.css";

function Home() {
  const [addTask, setAddTask] = useState();
  const [taskList, setTaskList] = useState([]);
  const [isfocused, setIsFocused] = useState(false);

  const [isEdit, setIsEdit] = useState(null);
  const inputRef = useRef();

  const addTaskFunc = () => {
    if (!addTask) {
      alert("please add task");
    } else {
      var tempArr = [...taskList];
      if (isEdit) {
        console.log(isEdit, "jijjijjji");
        tempArr = tempArr.map((val, ind) => {
          console.log(val, "valuee");
          if (ind == isEdit) {
            return addTask;
          } else {
            return val;
          }
        });
        console.log(tempArr, "tempppppp");
        setTaskList(tempArr);
        // setIsEdit(null)
      } else {
        tempArr.push(addTask);
        setTaskList(tempArr);
      }

      setAddTask("");
      setIsFocused(false);
    }
  };

  const delTaskFunc = (index) => {
    const arr = taskList.filter((itm, ind) => {
      console.log(ind, "jijijis");
      if (index !== ind) {
        return itm;
      }
    });
    setTaskList(arr);
  };

  const editTaskFunc = (index, val) => {
    inputRef.current.focus();
    setIsEdit(index);
    setAddTask(val);
  };

  return (
    <div className="App">
      <header className="App-header" style={{
                background: `linear-gradient(to  right, ${colors.theamColor}, ${colors.purplelight}`,

      }}>
        <div>
          <h6 style={{ color: "white" }}>Add Task</h6>
          <input
            ref={inputRef}
            style={{
              height: "30px",
              width: 240,
              borderRadius: 8,
              borderWidth: 3,
              borderColor: !isfocused ? "#4D9FCE" : "white",
              backgroundColor: "white",
              paddingLeft: 10,
              paddingRight: 10,
              outline: "none",
            }}
            name="text"
            autoComplete="off"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
          />
          <button
            style={{
              height: "34px",
              backgroundColor: "#4D9FCE",
              color: "white",
              marginLeft: 14,
              borderRadius: 8,
              width: "80px",
            }}
            onClick={addTaskFunc}
            type="submit"
          >
            Add
          </button>
        </div>

        {/* {taskList.map((val, index) => {
          return (
            <div className="map-view">
              <p style={{ color: "white", fontSize: 14 }}>{val}</p>;
              <button
                style={{ height: 28, backgroundColor: "#A67EB6" }}
                onClick={() => editTaskFunc(index, val)}
                type="submit"
              >
                edit
              </button>
              <button
                style={{ height: 28, backgroundColor: "#A67EB6" }}
                onClick={() => delTaskFunc(index)}
                type="submit"
              >
                delete
              </button>
            </div>
          );
        })} */}
      </header>
    </div>
  );
}

export default Home;
