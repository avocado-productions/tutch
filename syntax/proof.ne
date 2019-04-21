@lexer lexer
@include "./proposition.ne"

ProofFile -> _ (ProofDeclaration _ ";" _):*       {% x => x[1].map(y => y[0]) %}

ProofDeclaration -> "proof" _ %ident _ ":" _ Prop _ "=" _ "begin" _ ProofSequence _ "end"
                                                  {% x => [x[2], x[6], x[12]] %}

ProofSequence -> (ProofStep _ ";" _):* ProofStep  {% util.ProofSequence %}
Hypotheses -> (Prop _ "," _):* Prop               {% util.Hypotheses %}

ProofStep -> Prop                                 {% id %}
           | "[" _ Hypotheses _ (";" _ ProofStep _):+ "]"
                                                  {% util.HypotheticalProof %}