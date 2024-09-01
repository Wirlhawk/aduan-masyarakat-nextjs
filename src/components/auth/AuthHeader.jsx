import React from 'react'
import {
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Atom, Lock } from "lucide-react";

const AuthHeader = ({title,label}) => {
  return (
      <>
          <CardTitle className="text-2xl text-primary inline-flex items-center gap-2">
            <Lock className="h-6 w-6" />
            <span>{title}</span>
          </CardTitle>
          <CardDescription>
            {label}
          </CardDescription>
      </>
  );
}

export default AuthHeader