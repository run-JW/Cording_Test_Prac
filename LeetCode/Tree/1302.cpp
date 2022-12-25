class Solution {
public:
    int deepestLeavesSum(TreeNode* root) {
        traverseAndGetResult(root, 0);
        return result;
    }
private:
    int result = 0;
    int deepestLv = 0;

    void traverseAndGetResult(TreeNode* node, int level) {
        if (node != nullptr) {
            traverseAndGetResult(node->left, level + 1);
            if (deepestLv < level) {
                deepestLv = level;
                result = node->val;
            } else if (deepestLv == level) {
                result += node->val;
            }
            traverseAndGetResult(node->right, level + 1);
        }
    }
};
