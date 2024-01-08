package scala_backend

import akka.actor.ActorSystem
import akka.grpc.scaladsl.{ServerReflection, ServiceHandler}
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.{HttpRequest, HttpResponse}
import com.typesafe.config.ConfigFactory
import example.myapp.helloworld.grpc.{GreeterService, GreeterServiceHandler}
import example.GreeterServiceImpl
import scala_backend.todo.grpc.{TodoService, TodoServiceHandler}

import scala.concurrent.{ExecutionContext, Future}

class Main(system: ActorSystem) {

  def run(): Future[Http.ServerBinding] = {
    implicit val sys: ActorSystem = system
    implicit val ec: ExecutionContext = sys.dispatcher

    val greeterService: PartialFunction[HttpRequest, Future[HttpResponse]] =
      GreeterServiceHandler.partial(new GreeterServiceImpl())
    val todoService: PartialFunction[HttpRequest, Future[HttpResponse]] =
      TodoServiceHandler.partial(new TodoServiceImpl())

    val reflection: PartialFunction[HttpRequest, Future[HttpResponse]] =
      ServerReflection.partial(List(GreeterService, TodoService))

    val binding = Http()
      .newServerAt(
        interface = "127.0.0.1",
        port = 8080
      )
      .bind(
        ServiceHandler.concatOrNotFound(greeterService, todoService, reflection)
      )

    binding.foreach { binding =>
      println(s"gRPC server bound to: ${binding.localAddress}")
    }
    binding
  }

}

object Main {

  def main(args: Array[String]): Unit = {
    val conf = ConfigFactory.load("application.conf")
    val system = ActorSystem("HelloWorld", conf)
    val server = new Main(system).run()
  }

}