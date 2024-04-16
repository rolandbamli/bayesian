Lemma problem_zh_1 : forall A B C : Prop, A /\ (B \/ C) -> (A /\ B) \/ (A /\ C).
Proof.
  intros A B C H.
  destruct H as [HA HBC].
  destruct HBC as [HB | HC].
    - left. split.
      + exact HA.
      + exact HB.
    - right. split.
      + exact HA.
      + exact HC.
  Show Proof.
Qed.