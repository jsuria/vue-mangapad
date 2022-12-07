import React from "react";

type HelloWorldProps = {
 title: string;
 respondFunction: () => void;
 children: React.ReactNode
};

export function HelloWorld({ title, respondFunction }: HelloWorldProps) {
  return ( 
      <>
      <h2>Hello World Example</h2>
       {title}    
      <button onClick={() => respondFunction()}>Respond</button>        
      </>
  );
}