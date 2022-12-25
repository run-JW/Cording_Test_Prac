class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        processInorderTraversal(root);
        return result;
    }

private:
    vector<int> result;

    void processInorderTraversal(TreeNode* node) {
        if (node != NULL) {
            processInorderTraversal(node->left);
            result.push_back(node->val);
            processInorderTraversal(node->right);
        }
    }
};
