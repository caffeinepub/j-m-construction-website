import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactEntry } from '../backend';

export function useSubmitContactEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      companyName,
      email,
      message,
      timestamp
    }: {
      name: string;
      companyName: string;
      email: string;
      message: string;
      timestamp: bigint;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactEntry(name, companyName, email, message, timestamp);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactEntries'] });
    }
  });
}

export function useGetAllContactEntries() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactEntry[]>({
    queryKey: ['contactEntries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactEntries();
    },
    enabled: !!actor && !isFetching
  });
}

export function useGetContactEntry(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactEntry>({
    queryKey: ['contactEntry', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getContactEntry(id);
    },
    enabled: !!actor && !isFetching
  });
}
