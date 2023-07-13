import { ComponentProps, useEffect } from "react";
import { TextInput } from "react-native-paper";
import colors from "../../theme/colors";
import { Control, FieldValues, useController } from 'react-hook-form';
import { Text } from "../../Themed";

//The Omit, get the type of 'ComponentProps<typeof TextInput>' and remove the prop 'mode'
//this way is impossible to change the 'mode' and the 'activeOutlineColor' of the input outside this component
interface CustomImputProps extends Omit<ComponentProps<typeof TextInput>, 'mode' | 'activeOutlineColor' | 'onChangeText'> {
    control: Control<FieldValues, any>;
    name: string;
    onPress?(): void;
    type?: string;
    errorMessage?: any;
}

function CustomImput(props: CustomImputProps) {
    const { field } = useController({
        control: props.control,
        defaultValue: '',
        name: props.name
    });

    return (
        <>
            <TextInput
                mode="outlined"
                activeOutlineColor={colors.colors.text_primary}
                value={field.value}
                onChangeText={field.onChange}
                right={props.type === 'password' && <TextInput.Icon icon="eye" onPress={props.onPress} />}
                {...props}
            />
            {
                props.errorMessage &&
                <Text>{props.errorMessage}</Text>
            }
        </>
    );
}

export default CustomImput;