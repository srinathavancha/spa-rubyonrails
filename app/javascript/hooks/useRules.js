import { useSelector } from 'react-redux';
import { selectGrantsList, selectRulesRegistry, selectRulesStatus } from '../store/rulesSlice';
import { selectUser } from '../store/authSlice';

export function useIsRuleActive(ruleName) {
  const user = useSelector(selectUser);
  const rulesRegistry = useSelector(selectRulesRegistry);
  const grants = user?.grants || [];
  const rulesStatus = useSelector(selectRulesStatus);

  if (rulesStatus !== 'succeeded') return false;
  const grantsForRule = rulesRegistry[ruleName] || [];
  return grantsForRule.some((grant) => grants.includes(grant));
}
