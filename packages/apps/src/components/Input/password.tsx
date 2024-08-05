import * as React from "react";
import { Input, InputProps } from "./input";

export interface PasswordInputProps extends InputProps {
    onVisibleChange?: (visible: boolean) => void;
    iconRender?: (visible: boolean) => React.ReactNode;
    visible?: boolean;
}

export const Password: React.FC<PasswordInputProps> = (props: PasswordInputProps) => {
    const [visible, setVisible] = React.useState<boolean>(props.visible || false);
    const node = props.iconRender?.(visible) as React.JSX.Element;

    React.useEffect(() => {
        console.log('visible changed', visible)
        props.onVisibleChange?.(props.visible);
    }, [visible])
    return (
        <Input {...props} type={visible ? 'text' : 'password'}>
            {
                props.iconRender && typeof props.iconRender === 'function' && React.cloneElement(node, {
                    onClick: (e) => {
                        setVisible(v => !v);
                    }
                })
            }
        </Input>
    )
}