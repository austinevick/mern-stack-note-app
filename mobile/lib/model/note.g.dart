// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'note.dart';

// **************************************************************************
// RepositoryGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, duplicate_ignore

mixin $NoteLocalAdapter on LocalAdapter<Note> {
  static final Map<String, RelationshipMeta> _kNoteRelationshipMetas = {};

  @override
  Map<String, RelationshipMeta> get relationshipMetas =>
      _kNoteRelationshipMetas;

  @override
  Note deserialize(map) {
    map = transformDeserialize(map);
    return _$NoteFromJson(map);
  }

  @override
  Map<String, dynamic> serialize(model, {bool withRelationships = true}) {
    final map = _$NoteToJson(model);
    return transformSerialize(map, withRelationships: withRelationships);
  }
}

final _notesFinders = <String, dynamic>{};

// ignore: must_be_immutable
class $NoteHiveLocalAdapter = HiveLocalAdapter<Note> with $NoteLocalAdapter;

class $NoteRemoteAdapter = RemoteAdapter<Note> with JsonServerAdapter<Note>;

final internalNotesRemoteAdapterProvider = Provider<RemoteAdapter<Note>>(
    (ref) => $NoteRemoteAdapter(
        $NoteHiveLocalAdapter(ref), InternalHolder(_notesFinders)));

final notesRepositoryProvider =
    Provider<Repository<Note>>((ref) => Repository<Note>(ref));

extension NoteDataRepositoryX on Repository<Note> {
  JsonServerAdapter<Note> get jsonServerAdapter =>
      remoteAdapter as JsonServerAdapter<Note>;
}

extension NoteRelationshipGraphNodeX on RelationshipGraphNode<Note> {}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Note _$NoteFromJson(Map<String, dynamic> json) => Note(
      id: json['id'] as String?,
      title: json['title'] as String,
      content: json['content'] as String,
    );

Map<String, dynamic> _$NoteToJson(Note instance) => <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'content': instance.content,
    };
