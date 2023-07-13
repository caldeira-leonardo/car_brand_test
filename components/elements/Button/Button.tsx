import colors from "../../theme/colors";
import { Text } from '../../Themed';
import { ActivityIndicator } from 'react-native';
import { CustomButtonStyled, CustomTextbutton } from './StyledButton';

interface CustomButtonProps {
    color?: string;
    backgroundColor?: string;
    title: string;
    onPress(): void;
    fullwidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

function CustomButton({ backgroundColor, color, onPress, title, fullwidth, disabled, loading }: CustomButtonProps) {

    return (
        <CustomButtonStyled
            disabled={(disabled || loading)}
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor || (disabled || loading) && colors.colors.disabled || colors.colors.primary,
                width: fullwidth ? '100%' : undefined
            }}>
            {
                loading ?
                    <ActivityIndicator color={colors.colors.text_primary} />
                    : <CustomTextbutton
                        style={{
                            color: color || (disabled || loading) && colors.colors.light || colors.colors.text_primary,
                        }} >{title}</CustomTextbutton>
            }

        </CustomButtonStyled>
    );
};

export default CustomButton;
