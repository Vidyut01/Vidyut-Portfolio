import React from "react";

const useChildren = (children: React.ReactNode, name: string) => 
    React.Children.map(children, (child: any) => 
        child.type.name === name ? child : null
    );

export default useChildren;
