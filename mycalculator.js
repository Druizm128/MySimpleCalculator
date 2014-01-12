
// Defining Variables

	Memory  = "0";      // initialise memory variable
    Current = "0";      //   and value of Display ("current" value)
    Operation = 0;      // Records code for eg * / etc.
    MAXLENGTH = 30;     // maximum number of digits before decimal!

// Defining Methods

	
	// ADD A DIGIT TO DISPLAY (kept as "Current")
	function AddDigit(dig)          
	{
		if (Current.length > MAXLENGTH)
		{
 		 	Current = "Aargh! Too long"; //limit length
       	} else
       	{ 
       		if (    (eval(Current) == 0) && (Current.indexOf(".") == -1)    ) 
       		{ 
       			Current = dig;
        	} else
        	{ 
        		Current = Current + dig;
        	};
    	};
   		document.Calculator.Display.value = Current;
 	}
	
	//PUT IN "." if appropriate
	
	function Dot(){
		if (Current.length==0){
			Current = "0.";
		} else {
			if(Current.indexOf(".")==-1){
				Current = Current + ".";
			};
		};
		document.Calculator.Display.value = Current;
	}
	
	//CLEAR ENTRY
	
	function Clear(){
		Current = "0";
		document.Calculator.Display.value = Current;
	}
	
	// CLEAR ALL
	
	function AllClear(){
		Current = "0";
		Operation = 0;
		Memory = "0";
		document.Calculator.Display.value = Current;
	}
	
	// STORE OPERATION
	
	function Operate(op){
		if (op.indexOf("x") > -1){ Operation = 1;};
		if (op.indexOf("/") > -1){ Operation = 2;};
		if (op.indexOf("+") > -1){ Operation = 3;};
		if (op.indexOf("-") > -1){ Operation = 4;};
	Memory = Current;
	Current = "";
	document.Calculator.Display.value = Current;
	}
	
	// PERFORM CALCULATION
	function Calculate(){
		if (Operation ==1){Current = eval(Memory) * eval(Current);};
		if (Operation ==2){Current = eval(Memory) / eval(Current);};
		if (Operation ==3){Current = eval(Memory) + eval(Current);};
		if (Operation ==4){Current = eval(Memory) - eval(Current);};
		
		Operation = 0;
		Memory = "0";
		document.Calculator.Display.value = Current;
	}
			
		
		

		
		
		
		