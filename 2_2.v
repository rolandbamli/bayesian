Lemma problem_2 : forall A B C : Prop, ((B -> A) /\ (C -> A)) -> (B \/ C -> A).
Proof.
  intros A B C H.
  destruct H as [H1 H2].
  intro H.
  destruct H as [HB | HC].
  - apply H1. assumption.
  - apply H2. assumption.
  Show Proof.
Qed.
