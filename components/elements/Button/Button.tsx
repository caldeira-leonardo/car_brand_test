import colors from "../../theme/colors";
import { Text } from '../../Themed';
import { CustomButtonStyled, CustomTextbutton } from './StyledButton';

interface CustomButtonProps {
    color?: string;
    backgroundColor?: string;
    title: string;
    onPress(): void;
    fullwidth?: boolean;
    disabled?: boolean;
}

function CustomButton({ backgroundColor, color, onPress, title, fullwidth, disabled }: CustomButtonProps) {

    return (
        <CustomButtonStyled disabled={disabled} onPress={onPress} style={{ backgroundColor: backgroundColor || disabled && colors.colors.disabled || colors.colors.primary, width: fullwidth ? '100%' : undefined }}>
            <CustomTextbutton style={{ color: color || disabled && colors.colors.light || colors.colors.text_primary, }} >{title}</CustomTextbutton>
        </CustomButtonStyled>
    );
};

export default CustomButton;
