import 'package:flutter_data/flutter_data.dart';
import 'package:json_annotation/json_annotation.dart';

part 'note.g.dart';

@JsonSerializable()
@DataRepository([JsonServerAdapter])
class Note extends DataModel<Note> {
  @override
  final String? id;
  final String title;
  final String content;

  Note({this.id, required this.title, required this.content});
}

mixin JsonServerAdapter<T extends DataModel<T>> on RemoteAdapter<T> {
  @override
  String get baseUrl => 'http://127.0.0.1:3000/api/note';
}
