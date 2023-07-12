import { ComponentProps } from "react";
import { TextInput } from "react-native-paper";
import colors from "../../theme/colors";

//The Omit, get the type of 'ComponentProps<typeof TextInput>' and remove the prop 'mode'
//this way is impossible to change the 'mode' and the 'activeOutlineColor' of the input outside this component
interface CustomImputProps extends Omit<ComponentProps<typeof TextInput>, 'mode' | 'activeOutlineColor'> {
}

function CustomImput(props: CustomImputProps) {

    return (
        <TextInput
            mode="outlined"
            activeOutlineColor={colors.colors.primary}
            {...props}
        />
    );
}

export default CustomImput;