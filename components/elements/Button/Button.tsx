import colors from "../../theme/colors";
import { Text } from '../../Themed';
import { CustomButtonStyled, CustomTextbutton } from './StyledButton';

interface CustomButtonProps {
    color?: string;
    backgroundColor?: string;
    title: string;
    onPress(): void;
    fullwidth?: boolean;
}

function CustomButton({ backgroundColor, color, onPress, title, fullwidth }: CustomButtonProps) {
    return (
        <CustomButtonStyled onPress={onPress} style={{ backgroundColor: backgroundColor || colors.colors.primary, width: fullwidth ? '100%' : undefined }}>
            <CustomTextbutton style={{ color: color || colors.colors.text_primary, }} >{title}</CustomTextbutton>
        </CustomButtonStyled>
    );
};

export default CustomButton;
