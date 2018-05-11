
export class LoggingService {
  logToConsole(message: String) {

    console.log('A server status changed, new status'+ message);
  }
}
