
 export const required = (value:any) => {
  if (value || typeof value === 'number') {
   return undefined
  } else {
   return 'Required'
  }
 }

 export const maxLength = (max:any) => {
 return  function (value:any) {
   if(value && value.length > max)
   {return  `Must be ${max} characters or less`}
   else { return  undefined }
  }
 }
