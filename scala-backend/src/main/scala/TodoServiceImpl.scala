package scala_backend

import java.util.UUID
import scala.collection.mutable.ArrayBuffer
import scala.concurrent.{ExecutionContext, Future}
import scala_backend.todo.grpc.TodoService
import scala_backend.todo.grpc.{
  GetTodosReply,
  GetTodosRequest,
  GetTodosResponse,
  TodoMessage
}
import scala_backend.todo.grpc.{CreateTodoReply, CreateTodoRequest}
import scala_backend.todo.grpc.{UpdateTodoReply, UpdateTodoRequest}
import scala_backend.todo.grpc.CreateTodoResponse
import scala_backend.todo.grpc.UpdateTodoResponse

class TodoServiceImpl(implicit ec: ExecutionContext) extends TodoService {

  val todos: ArrayBuffer[TodoMessage] = ArrayBuffer(
    TodoMessage(
      id = UUID.randomUUID().toString(),
      title = "ゴミ出し",
      dueDate = 123456789,
      isCompleted = true
    ),
    TodoMessage(
      id = UUID.randomUUID().toString(),
      title = "買い物",
      dueDate = 123456789,
      isCompleted = false
    )
  )

  override def getTodos(in: GetTodosRequest): Future[GetTodosReply] = {
    Future.successful(
      GetTodosReply(
        status = 0,
        data = Some(
          GetTodosResponse(todos = this.todos.toSeq)
        )
      )
    )
  }

  override def createTodo(in: CreateTodoRequest): Future[CreateTodoReply] = {
    val created = TodoMessage(
      id = UUID.randomUUID().toString(),
      title = in.title,
      dueDate = 123456789,
      isCompleted = false
    )

    this.todos += created

    Future.successful(
      CreateTodoReply(
        status = 0,
        data = Some(CreateTodoResponse(todo = Some(created)))
      )
    )
  }

  override def updateTodo(in: UpdateTodoRequest): Future[UpdateTodoReply] = {

    val targetIndex = todos.indexWhere(_.id == in.id)
    if (targetIndex == -1) {
      throw new NoSuchElementException()
    }

    val updated = TodoMessage(
      id = in.id,
      title = in.title,
      dueDate = 12345678,
      isCompleted = in.isCompleted
    )
    this.todos(targetIndex) = updated

    Future.successful(
      UpdateTodoReply(
        status = 0,
        data = Some(UpdateTodoResponse(todo = Some(updated)))
      )
    )
  }

}
