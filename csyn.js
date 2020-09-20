
var text




let input = function(text)
{
    text = text

    console.log("\n*_*");    
    return csyn(text)
}

let csyn = function(text)
{

var s = text

    
    var ckeywords = ["int", "char", "void", "auto", "break", "case", "const", "continue", "default", "do", "double","else", "enum", "extern", "float", "for","goto", "if", "int", "long", "register", "return", "short", "signed", "sizeof", "static", "struct","switch", "typedef", "union", "unisgned", "void", "volatile", "while", "printf", "scanf","malloc","while"];
    
    var built_in = ["main","printf","scanf"]

    var finalstring=""

    savedstrings = []

    //string
    for(var i=0;i<s.length;i++)
    {
        if(s[i] == "\"")
        {
            var curr_string=""
            i++
            while(s[i]!="\"")
            {
                curr_string += s[i]
                i++
            }
            savedstrings.push(curr_string)
        }
    }
    // document.write(savedstrings)
    
    
    
    // document.write("<br>")
    
    
    var k=0  
    var len
    var ps1 = "<span style =\"color:orangered\">"  
    var ps2 = "</span>"
    for(var i=0;i<s.length;i++)
    {
        if(s[i]=="\"")
        {
            len = savedstrings[k]
            // document.write(s.substring(0,i+1) + ps1 + savedstrings[k++] + ps2 + s.substring(i+k,s.length)) 
            i = i+k+1;
        }
    }

    



    //operators
    var operatorregex = new RegExp("[+|-|=|/|*|\||!|>|<|-|;]","g")
    var operatororder =[]
    while((match=operatorregex.exec(s))!=null)
    {
        operatororder.push(s[match.index])
    }    
    s = s.replace(operatorregex,"@")
    var k1=0
    for(let i=0;i<s.length;i++)
    {
        if( s[i] === "@")
        {
            var p1 = s.substring(0,i)
            p1 += "<span style =\"color:orangered\">"+ operatororder[k1++] +"</span>";
            p1 += s.substring(i+1,s.length)
            s = p1
        }
    }  
    
    
    

    
    //builtin
    var sp1 = "\\(*\\s*"
    var sp2 = "\\s*\\)*" 
    for(let i=0;i<built_in.length;i++)
    {
        var x = built_in[i]
        var re = new RegExp( sp1+ x +sp2  ,"g")
        s = s.replace(re,"<span style=" + "\"color:#DDFAAA\">"+built_in[i]+"</span>")
    }
    
    
    
    
    
    //keywords
    var sp1 = "\\(*\\s*"
    var sp2 = "\\s*\\)*" 
    for(let i=0;i<ckeywords.length;i++)
    {
        var x = ckeywords[i]
        var re = new RegExp( sp1 + x + sp2 ,"g")
        console.log(re + "@@@")
        s = s.replace(re,"<span style =\"color:cyan\">"+x+" </span>")
    }
    
    
    
    
    
    
    //numbers
    var re = /[0-9]/g
    var arr = []
    var strarr = []  
    while ((match = re.exec(s)) != null) {
        strarr.push(s[match.index])
    }
    s = s.replace(re,"@")
    var k1=0
    for(let i=0;i<s.length;i++)
    {
        if( s[i] === "@")
        {
            var p1 = s.substring(0,i)
            p1 += "<span style =\"color:#983ADA\">"+ strarr[k1++] +"</span>";
            p1 += s.substring(i+1,s.length)
            s = p1
        }
    }    
    
    
    // parenthesis
    s = s.replace(/{/g, "<span style =\"color:#D86e75\">"+ "{" +"</span>"  ) 
    s = s.replace(/}/g, "<span style =\"color:#D86e75\">"+ "}" +"</span>"  ) 
    
    
    // printing the code
    for(let i=0;i<s.length;i++)
    {
        if(s[i] === "\n" || s[i]==="\r" )
        {
            // document.write("<br>") 
            // console.log("$$$");
            

            if(s.charCodeAt(i) > 13)
                    s = s.substring(0,i) + "<br>" + s.substring(i+1,s.length)
            else
                    s = s.substring(0,i) + "<br>" + s.substring(i+2,s.length)

            
        }
    }
    // console.log(s);
    text = s
    // console.log(s+"\n###");
    
    return text
};




module.exports = {
    input:input,
    csyn:csyn,
};