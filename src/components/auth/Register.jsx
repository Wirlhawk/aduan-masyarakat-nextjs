"use client"

import React from "react";
import CardWrapper from "./CardWrapper";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import register from "@/actions/auth/register";

const Register = () => {
    const [error,setError] = useState("")
    const [success, setSuccess] = useState("");
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
        username: "",
        name: "",
        password: "",
        },
    });

    const onSubmit = async (data) => {
        setError('')
        const res = await register(data)

        if (res.error) {
            setError(res.error)
        }

        if (res.success) {
            setSuccess("Account has been created")
        }
    };

    const { pending } = useFormStatus();

    return (
        <CardWrapper
            label="Create an account"
            title="Register"
            backButtonHref="/login"
            backButtonLabel="Already have an account? Login here."
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        placeholder="JohnnyDoey"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="John Doe" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="password"
                                        placeholder="******"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormMessage>
                        {error}
                    </FormMessage>
                    <FormMessage className="text-green-600">
                        {success}
                    </FormMessage>

                    <Button className="w-full" disabled={pending}>Register</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default Register;
