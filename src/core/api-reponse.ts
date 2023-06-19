import { Response } from "express";
import EResponseStatus from "../data/response-status.enum";

export default new (class ApiResponse {
  SuccessReponse<T>(res: Response, data: T) {
    return res.status(EResponseStatus.SUCCESS).json({
      status: "success",
      data: data,
    });
  }
  ErrorReponse(res: Response, status: EResponseStatus, message?: string) {
    return res.status(status).json({
      status: "error",
      message: message,
    });
  }
})();
