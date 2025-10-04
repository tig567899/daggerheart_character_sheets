import { ReactElement } from "react";

interface TooltipProps {
    content: string | ReactElement;
}

export const BaseTooltip = ({ content }: TooltipProps) => {
    return <div>{content}</div>
};