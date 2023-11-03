import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:mobile/main.data.dart';

class HomeScreen extends HookConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      body: ref.watch(repositoryInitializerProvider).when(
            data: (_) {
              final state = ref.notes.watchAll();
              if (state.isLoading) {
                return const CircularProgressIndicator();
              }
              return ListView(
                children: [
                  for (final note in state.model) Text(note.title),
                ],
              );
            },
            error: (error, _) => Text(error.toString()),
            loading: () => const CircularProgressIndicator(),
          ),
    );
  }
}
