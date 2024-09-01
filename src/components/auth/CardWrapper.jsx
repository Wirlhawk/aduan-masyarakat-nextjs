"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import React from "react";
import AuthHeader from "./AuthHeader";
import BackButton from './BackButton';

const CardWrapper = ({
    label,
    title,
    backButtonHref,
    backButtonLabel,
    children,
}) => {
    return (
        <Card className="xl:w-[30%] md:w-1/2">
            <CardHeader>
                <AuthHeader label={label} title={title} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;
