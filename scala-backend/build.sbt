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

assembly / assemblyMergeStrategy := {
  case PathList("META-INF", xs @ _*) => MergeStrategy.discard // META-INF以下のファイルは破棄
  case PathList("application.conf") => MergeStrategy.concat // application.confを連結
  case PathList("reference.conf") => MergeStrategy.concat // reference.confを連結
  case PathList("logback.xml") => MergeStrategy.concat // カスタムのLogback設定ファイルがある場合、連結
  case PathList("reference-overrides.conf") => MergeStrategy.concat // Akkaのreference-overrides.confを連結
  case x => MergeStrategy.first
}

assembly / assemblyJarName := "OmikujiTodoBackend.jar"
