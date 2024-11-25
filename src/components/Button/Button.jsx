import { ImBin } from "react-icons/im";

const Button = ({onDeleteTask, taskId}) => {
    return <button onClick=onDeleteTask(taskId)>
        <ImBin />
    </button>
}

export default Button;