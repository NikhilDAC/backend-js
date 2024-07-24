class ApiErrorHandling extends Error{
    constructor(message="something went worng!!",statusCode,errors=[],stack=""){
    super(message)
        this.statusCode=statusCode,
        this.data=null,
        this.message=message,
        this.success=false,
        this.errors=errors

}
}

export{ApiErrorHandling};