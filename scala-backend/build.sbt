name := "scala-backend"

ThisBuild / scalaVersion := "2.13.12"

fork := true

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-http" % "10.5.3",
  "com.typesafe.akka" %% "akka-http2-support" % "10.5.3",
  "com.typesafe.akka" %% "akka-stream" % "2.7.0",
  "com.typesafe.akka" %% "akka-discovery" % "2.7.0",
  "com.typesafe.akka" %% "akka-protobuf" % "2.7.0",
  "ch.qos.logback" % "logback-classic" % "1.2.3"
)

enablePlugins(AkkaGrpcPlugin)

artifactName := { (sv: ScalaVersion, module: ModuleID, artifact: Artifact) =>
  "OmikujiTodoBackend.jar"
}
